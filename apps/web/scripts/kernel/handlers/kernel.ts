import { MessengerCallback } from '@walless/messaging';

import { fetchAllCollectibles, fetchAllTokens } from '../utils/query';

import { handleConnect } from './connect';
import {
	handleSignAllTransaction,
	handleSignAndSendTransaction,
	handleSignMessage,
	handleSignTransaction,
} from './sign';

export const onKernelMessage: MessengerCallback = async (payload, channel) => {
	if (payload.requestId) {
		if (payload.type === 'request-connect') {
			await handleConnect(payload, channel);
		} else if (payload.type === 'sign-transaction') {
			await handleSignTransaction(payload, channel);
		} else if (payload.type === 'sign-all-transactions') {
			await handleSignAllTransaction(payload, channel);
		} else if (payload.type === 'sign-message') {
			await handleSignMessage(payload, channel);
		} else if (payload.type === 'sign-and-send-transaction') {
			await handleSignAndSendTransaction(payload, channel);
		}
	} else {
		if (payload.type === 'notify-wallet-open') {
			const { collectibles, collections } = await fetchAllCollectibles();

			console.log(collectibles, 'collectibles');
			console.log(collections, 'collections');

			const wallets = await fetchAllTokens();
			console.log(wallets, 'wallets');
		}
	}
};
