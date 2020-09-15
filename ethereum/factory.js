import web3 from "./web3";

import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x1B81969813b50d4B1F003961c3540C668E63C6c6"
);

export default instance;
