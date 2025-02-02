import { sendRequest } from '../utils/messaging';

export const requestSignAndExecuteTransactionBlock = async (
	transaction: string,
	options: unknown,
) => {
	return await sendRequest({
		from: 'walless@sdk',
		type: 'sign-and-execute-transaction-on-sui',
		transaction,
		options,
	});
};

export const requestSignMessage = async (message: string) => {
	return await sendRequest({
		from: 'walless@sdk',
		type: 'sign-message-on-sui',
		message,
	});
};

export const requestSignTransactionBlock = async (transaction: string) => {
	return await sendRequest({
		from: 'walless@sdk',
		type: 'sign-transaction-on-sui',
		transaction,
	});
};
