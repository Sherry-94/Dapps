import React, { Component } from 'react';
import { Card, Button, Input, Message, Grid, Table } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import RequestRow from '../../../components/RequestRow';
import ContributeForm from '../../../components/ContributeForm';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

class CampaignRequests extends Component{
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const approversCount = await campaign.methods.approversCount().call();
    const requestsCount = await campaign.methods.getRequestsCount().call();
    const requests = await Promise.all(
      Array(parseInt(requestsCount)).fill().map((element, index) =>
      {
        return campaign.methods.requests(index).call();
      })
    );
    console.log(approversCount);

    const address = props.query.address;
    return {
      address:address,
      requestsCount: requestsCount,
      requests: requests,
      approversCount: approversCount
    };
  }

  renderRows()
  {
    return this.props.requests.map((request, index)=>{
      return(
        <RequestRow
        key = {index}
        id = {index}
        address={this.props.address}
        request = {request}
        approversCount = {this.props.approversCount}
        />
      );
      });
  }

  render ()
  {
    const { Header, Row, HeaderCell, Body } = Table
    return(
      <Layout>
        <h3>Requests</h3>
          <Link  route={`/campaigns/${this.props.address}/requests/new`}>
            <a>
              <Button primary floated="right" style={{ marginBottom: 10 }}> Add Request</Button>
            </a>

          </Link>
          <Table>
            <Header>
              <Row>
                <HeaderCell>ID</HeaderCell>
                <HeaderCell>Description</HeaderCell>
                <HeaderCell>Amount</HeaderCell>
                <HeaderCell>Recipient</HeaderCell>
                <HeaderCell>Approval Count</HeaderCell>
                <HeaderCell>Approve</HeaderCell>
                <HeaderCell>Finalize Count</HeaderCell>
              </Row>
            </Header>
            <Body>
              {this.renderRows()}
            </Body>
          </Table>
          <div>Found {this.props.requestsCount} requests.</div>
      </Layout>
    );
  }
}
export default CampaignRequests;
