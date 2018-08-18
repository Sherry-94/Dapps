import React, { Component } from 'react';
import { Form, Card, Button, Input, Message, Grid } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import ContributeForm from '../../../components/ContributeForm';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

class RequestIndex extends Component{

  state = {
    description: '',
    value: '',
    recipient: '',
    errorMessage: '',
    successMessage: '',
    loading: false
  }

  static async getInitialProps(props) {
    const address = props.query.address;
    return { address };
  }

  onSubmit = async (event) =>
  {
    event.preventDefault();
    //console.log(this.state);
    const { description, value, recipient } = this.state;
    this.setState({loading: true, errorMessage: '', successMessage: ''});
      console.log(this.props.address);
    try{
      const accounts = await web3.eth.getAccounts();
      const campaign = Campaign(this.props.address);
      await campaign.methods.createRequest(
        description,
        web3.utils.toWei(value,'ether'),
        recipient
       )
         .send({ from: accounts[0] });
      Router.replaceRoute(`/Campaigns/${this.props.address}/requests/new`)
      this.setState({successMessage: 'A request has been added for the approval'});

    }
    catch(err)
    {
      this.setState({errorMessage: err.message});
    }
    this.setState({loading: false});
  };

  render ()
  {
    return(
      <Layout>
          <Form onSubmit = {this.onSubmit} error={!!this.state.errorMessage} success={!!this.state.successMessage}>
            <h3>Create a Request</h3>
            <Form.Field>
              <label>Description</label>
              <Input value = {this.state.description}
                onChange = {event => this.setState({description: event.target.value})}
               />

              <label>Amount in Ether</label>
              <Input label="ether"
              value = {this.state.value}
              labelPosition="right"
               onChange = {event => this.setState({value: event.target.value})} />

               <label>Recipient</label>
               <Input
                label="Address"
                value = {this.state.recipient}
                onChange = {event => this.setState({recipient: event.target.value})}
                />
            </Form.Field>
            <Message success header="Success..!" content={this.state.successMessage} />
            <Message error header="Oops...!" content={this.state.errorMessage} />
            <Button loading={this.state.loading} type="submit" primary >Create</Button>
          </Form>
        </Layout>
    );
  }
}
export default RequestIndex;
