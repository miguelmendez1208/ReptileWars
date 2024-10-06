import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
import { anvil } from '@wagmi/core/chains'
import { injected } from '@wagmi/core'

import { walletConnect} from '@wagmi/connectors';

export const config = createConfig({
  chains: [mainnet, sepolia, anvil],
  connectors: [
    walletConnect({
      projectId: 'dcf2203a8117d45d3f846bad180a0bf5',
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [anvil.id]: http(),
  },
})

//console.log(JSON.stringify(mainnet, null, 2));

