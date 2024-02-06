import { useState, type ChangeEvent } from 'react';
import ColorList from './ColorList';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

type dataInput = {
	color: string;
};

const App = () => {
	const [color, setColor] = useState<string>('');
	const [colors, setColors] = useState(new Values('#f15025').all(10));

	const handleSave = (data: unknown) => {
		const { color } = data as dataInput;

		try {
			const newColors = new Values(color).all();
			setColors(newColors);
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message);
			}
		}
	};

	return (
		<main>
			<section className="container">
				<ToastContainer position="top-center" />
				<h4>Color Generator</h4>
				<Form className="color-form" onSave={handleSave}>
					<Input
						value={color}
						type="color"
						onChange={(e: ChangeEvent<HTMLInputElement>) => setColor(e.target.value)}
						style={{ cursor: 'pointer' }}
					/>
					<Input
						name="color"
						type="text"
						value={color}
						placeholder="#f15025"
						onChange={(e: ChangeEvent<HTMLInputElement>) => setColor(e.target.value)}
					/>
					<Button className="btn" type="submit" style={{ background: color }} text="submit" />
				</Form>
			</section>

			<ColorList colors={colors} />
		</main>
	);
};
export default App;
