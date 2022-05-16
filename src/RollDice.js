import { Component } from 'react';
import Die from './Die';
import './RollDice.css';
import './index.css';

const dieFace = {
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
};

class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = { die1: 'one', die2: 'five' };
		this.roll = this.roll.bind(this);
	}

	roll() {
		const rand1 = dieFace[Math.floor(Math.random() * 6 + 1)];
		const rand2 = dieFace[Math.floor(Math.random() * 6 + 1)];
		this.setState({ die1: rand1, die2: rand2 });
	}

	render() {
		return (
			<div className='RollDice'>
				<Die die={this.state.die1} />
				<Die die={this.state.die2} />
				<button type='button' className='btn' onClick={this.roll}>
					Roll Dice!
				</button>
			</div>
		);
	}
}

export default RollDice;
