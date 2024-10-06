// main.ts
import { createAppKit } from '@reown/appkit'
import { mainnet, arbitrum } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// 1. Get a project ID at https://cloud.reown.com
const projectId = 'dcf2203a8117d45d3f846bad180a0bf5'

export const networks = [mainnet, arbitrum]

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
  networks: [mainnet, arbitrum],
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

// 4. Trigger modal programaticaly
const openConnectModalBtn = document.getElementById('open-connect-modal')

openConnectModalBtn.addEventListener('click', () => modal.open())
