import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
	text: string;
} & ComponentPropsWithoutRef<'button'>;

const Button = ({ text, ...props }: ButtonProps) => {
	return <button {...props}>{text}</button>;
};

export default Button;
