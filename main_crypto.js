// main.ts
import { createAppKit } from '@reown/appkit'
import { mainnet, arbitrum } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// 1. Get a project ID at https://cloud.reown.com
const projectId = 'dcf2203a8117d45d3f846bad180a0bf5'


console.log("arbitrum obj: ");
console.log(JSON.stringify(arbitrum, null, 2));


export function getBlockchainApiRpcUrl(chainId, namespace) {
  return `https://rpc.walletconnect.org/v1/?chainId=${namespace}:${chainId}`;
}
export const anvil = {
  id: 'eip155:31337',
  chainId: 31337,
  name: 'Anvil',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: "127.0.0.1:8545",
  chainNamespace: 'eip155'
};
export const networks = [mainnet, arbitrum, anvil]

// 2. Set up Wagmi adapter
const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
})

// 3. Configure the metadata
const metadata = {
  name: 'reptile_wars',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// 3. Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: networks,
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

import { sendTransaction } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
import { getConnections } from '@wagmi/core';
const connections = getConnections(config)

async function startTransaction(){
  try {
    const result = await sendTransaction(config, {
      to: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      chainId: 31337,
      connector: connections[0]?.connector,  
      value: parseEther('0.01'),
    });
    console.log('Transaction successful:', result);
    return result;
  } catch (error) {
    console.error('Transaction failed:', error);
  }
}

// 4. Trigger modal programaticaly
const openConnectModalBtn = document.getElementById('open-connect-modal')
openConnectModalBtn.addEventListener('click', () => modal.open());

const sendTransactionBtn = document.getElementById('send-transaction');
sendTransactionBtn.addEventListener('click', ()=> console.log("Transaction sent."));