const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  await factory.methods.createCampaign('100').send({
    from: accounts[0],
    gas: '1000000'
  });

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe('Campaigns', () => {
  it('deploys a factory and a campaign', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });
  it('marks caller as the campaign manager', async() =>
  {
    const manager = await campaign.methods.manager().call();
    assert.equal(manager,accounts[0]);
  });

  it('approver can add himself', async() =>
  {
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: '200'
    });
    const approver = await campaign.methods.approvers(accounts[1]).call();
    assert.equal(approver,true);
  });

  it('approver cant add without minimum contribution', async() =>
  {
    try
    {
      await campaign.methods.contribute().send({
        from: accounts[1],
        value: '10'
      });
    assert(false);
    }
    catch(err)
    {
        assert(err);
    }

  });

  it('allows manager to create requests', async() =>
  {
    await campaign.methods.createRequest('for the purchase of compressor',1000,accounts[5]).send({
      from: accounts[0],
      gas: '1000000'
    });
    const request = await campaign.methods.requests(0).call();
    assert.equal(accounts[5],request.recipient);
  });

  it('approver can approve request', async() =>
  {
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: '200'
    });
    await campaign.methods.createRequest('for the purchase of compressor',1000,accounts[5]).send({
      from: accounts[0],
      gas: '1000000'
    });
    await campaign.methods.approveRequest(0).send({
      from: accounts[1]
    });
    const request = await campaign.methods.requests(0).call();
    //console.log(request);
    assert.equal(request.approvalCount,1);
  });

  it('manager can finalize Request', async() =>
  {
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: '200'
    });
    await campaign.methods.createRequest('for the purchase of compressor',10,accounts[5]).send({
      from: accounts[0],
      gas: '1000000'
    });
    await campaign.methods.approveRequest(0).send({
      from: accounts[1]
    });
    // const request = await campaign.methods.requests(0).call();
    // console.log("approvalcount: "+request.approvalCount);
    //
    // const approversCount = await campaign.methods.approversCount().call();
    // console.log("approversCount: "+approversCount);

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0]
    });
    const request = await campaign.methods.requests(0).call();
    console.log(request);
    assert.equal(request.complete,true);
  });

});
