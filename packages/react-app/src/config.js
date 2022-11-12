import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x7E3099aA0393a689755B428c28b3C758FeDF286F"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/YDFgHIyM8eOATqVNE41FKvxxvR_04k6q",
  },
};