import { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
	render() {
		return (
			<div className='RollDice'>
				<Die num={5} />
				<Die num={2} />
				<button type='button'>Roll Dice!</button>
			</div>
		);
	}
}

export default RollDice;
