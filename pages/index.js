import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import factory from '../ethereum/factory';
import { Link } from '../routes';

class CampaignIndex extends Component{
    static async getInitialProps()
    {
      const Campaigns = await factory.methods.getDeployedCampaigns().call();
      return {Campaigns};
    }

    renderCampaigns()
    {
      const items = this.props.Campaigns.map(address=>{
        return{
          header: address,
          description: (
            <Link route={`/Campaigns/${address}`}>
              <a>View Campaign</a>
            </Link>
          ),
          fluid: true
        };
      });
      return <Card.Group items = {items} />;
    }

  render ()
  {
    return(
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route='/Campaigns/new'>
            <a>
              <Button
                floated = "right"
                content = "Create Campaign"
                icon = "add"
                primary
              />
            </a>
          </Link>

          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}
export default CampaignIndex;
