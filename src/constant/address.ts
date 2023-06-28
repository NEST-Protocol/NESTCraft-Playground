import {Address} from 'wagmi';
import {bscTestnet} from 'wagmi/chains';

export const NEST_ADDRESS: {[p: number]: Address} = {
  [bscTestnet.id]: "0x821edD79cc386E56FeC9DA5793b87a3A52373cdE",
}

export const NEST_CRAFT_ADDRESS: {[p: number]: Address} = {
  [bscTestnet.id]: "0x06F86C308123e029ab80aCA18862Acfab52C47D8",
}