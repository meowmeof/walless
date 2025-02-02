import { Connection as SuiConnection, JsonRpcProvider } from '@mysten/sui.js';
import { clusterApiUrl, Connection as SolanaConnection } from '@solana/web3.js';

// Temporary solution for __DEV__
const __DEV__ = 'devnet';

const endpoint = __DEV__ ? 'devnet' : 'mainnet-beta';
export const solanaConnection = new SolanaConnection(clusterApiUrl(endpoint));

export const suiConnection = new SuiConnection({
	fullnode: 'https://fullnode.devnet.sui.io',
	faucet: 'https://faucet.devnet.sui.io/gas',
});

export const suiProvider = new JsonRpcProvider(suiConnection);
