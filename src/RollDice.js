import Die from './Die';
import './RollDice.css';

export default function RollDice() {
	return (
		<div className='RollDice'>
			<Die num={5} />
			<Die num={2} />
			<button type='button'>Roll Dice!</button>
		</div>
	);
}
