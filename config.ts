import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
import { anvil } from '@wagmi/core/chains'
import { injected } from '@wagmi/core'

export const config = createConfig({
  chains: [mainnet, sepolia, anvil],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [anvil.id]: http(),
  },
})

//console.log(JSON.stringify(mainnet, null, 2));

