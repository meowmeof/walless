import { FC } from 'react';
import { Button } from '@walless/gui';
import { Plus } from '@walless/icons';

interface Props {
	handleAddLayout: () => void;
}
const AddLayoutBtn: FC<Props> = ({ handleAddLayout }) => {
	return (
		<Button
			paddingVertical={8}
			paddingHorizontal={8}
			borderRadius={10}
			onPress={handleAddLayout}
		>
			<Plus size={14} />
		</Button>
	);
};

export default AddLayoutBtn;
