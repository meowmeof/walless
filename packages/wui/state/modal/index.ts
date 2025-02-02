import { RefObject } from 'react';
import { View } from 'react-native';
import { proxy } from 'valtio';
import { proxyMap } from 'valtio/utils';

import { measureRelative, referenceMap } from './helper';
import { ModalState, ShowModalConfigs } from './type';

export const modalState = proxy<ModalState>({
	count: 0,
	map: proxyMap(),
});

export const modalActions = {
	setContainerRef: (ref: RefObject<View>): void => {
		referenceMap.root = ref;
	},
	show: ({ id, bindingRef, ...restConfigs }: ShowModalConfigs): void => {
		const safeId = id || 'default-modal';

		measureRelative(bindingRef).then((layout) => {
			modalState.map.set(safeId, {
				id: safeId,
				bindingRectangle: layout,
				...restConfigs,
			});
		});
	},
	hide: (id: string): void => {
		const instance = modalState.map.get(id);

		if (instance) {
			modalState.map.set(id, { ...instance, hide: true });
		}
	},
	destroy: (id?: string): void => {
		const safeId = id || 'default-modal';
		modalState.map.delete(safeId);
	},
};

export * from './helper';
export * from './type';
