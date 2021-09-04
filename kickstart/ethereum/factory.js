import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x8BFA023D97977556de971f647Ec2F9F5b2A7A719'
);

export default instance;