import { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = { die1: 'one', die2: 'five' };
	}
	render() {
		return (
			<div className='RollDice'>
				<Die die={this.state.die1} />
				<Die die={this.state.die2} />
				<button type='button'>Roll Dice!</button>
			</div>
		);
	}
}

export default RollDice;
