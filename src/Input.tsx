import { type ComponentPropsWithoutRef } from 'react';

type InputProps = ComponentPropsWithoutRef<'input'>;

const Input = ({ ...props }: InputProps) => {
	return (
		<>
			<input {...props} />
		</>
	);
};

export default Input;
