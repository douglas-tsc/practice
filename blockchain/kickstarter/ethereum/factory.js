import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xeCEE94a087D69050f61b3576c80B0aEC9bE965dB"
);

export default instance;
