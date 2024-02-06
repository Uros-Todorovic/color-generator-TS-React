import Values from 'values.js';
import { toast } from 'react-toastify';

type SingleColor = {
	color: Values;
	index: number;
};

const SingleColor = ({ color, index }: SingleColor) => {
	const { hex, weight } = color;

	const saveToClipboard = async () => {
		if (navigator.clipboard) {
			await navigator.clipboard.writeText(`#${hex}`);
			toast.success('Collor copied to clipboard');
		} else {
			toast.error(`Cannot save to clipboard`);
		}
	};

	return (
		<article
			onClick={saveToClipboard}
			className={index > 10 ? 'color color-light' : 'color'}
			style={{ background: `#${hex}` }}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">#{hex}</p>
		</article>
	);
};

export default SingleColor;
