import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign'
import { Router } from '../routes'


class ContributeForm extends Component{

  state = {
    Contribution: '',
    errorMessage: '',
    successMessage: '',
    loading: false
  }

  onSubmit = async (event) =>
  {
    event.preventDefault();

    this.setState({loading: true, errorMessage: '', successMessage: ''});
      console.log(this.props.address);
    try{
      const accounts = await web3.eth.getAccounts();

      const campaign = Campaign(this.props.address);
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.Contribution,'ether')
      });
      Router.replaceRoute(`/Campaigns/${this.props.address}`)
      this.setState({successMessage: 'You have successfully contributed to this campaign'});

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

        <Form onSubmit = {this.onSubmit} error={!!this.state.errorMessage} success={!!this.state.successMessage}>
          <Form.Field>
            <h3>Find it fascinating? You can contribute here!</h3>
            <label>Minimum Contribution</label>
            <Input label="ether"
            value = {this.state.Contribution}
            labelPosition="right"
             onChange = {event => this.setState({Contribution: event.target.value})} />
          </Form.Field>
          <Message success header="Success..!" content={this.state.successMessage} />
          <Message error header="Oops...!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} type="submit" primary >Contribute</Button>
        </Form>
    );
  }
}
export default ContributeForm;
