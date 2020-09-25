import web3 from "./web3";

import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x83aBC8885Cd7765c0b10ba539d2494934a7C3433"
);

export default instance;
