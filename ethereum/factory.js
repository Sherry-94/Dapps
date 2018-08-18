import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(campaignFactory.interface),
  '0x4cE38053666a7313A3aBD22c78c0c7DAc06ab036'
);
export default instance;
