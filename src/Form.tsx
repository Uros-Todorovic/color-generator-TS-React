import { type ComponentPropsWithoutRef, type FormEvent } from 'react';

type FormProps = {
	onSave: (data: unknown) => void;
} & ComponentPropsWithoutRef<'form'>;

const Form = ({ onSave, children, ...props }: FormProps) => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData);
		onSave(data);
	};

	return (
		<form onSubmit={handleSubmit} {...props}>
			{children}
		</form>
	);
};

export default Form;
