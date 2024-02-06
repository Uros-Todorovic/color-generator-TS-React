import { nanoid } from 'nanoid';
import Values from 'values.js';
import SingleColor from './SingleColor';

type ColorsListProps = {
	colors: Values[];
};

const ColorList = ({ colors }: ColorsListProps) => {
	return (
		<section className="colors">
			{colors.map((color, index) => {
				return <SingleColor key={nanoid()} color={color} index={index} />;
			})}
		</section>
	);
};

export default ColorList;
