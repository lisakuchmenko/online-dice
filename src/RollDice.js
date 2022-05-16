import { Component } from 'react';
import Die from './Die';
import './RollDice.css';
import './index.css';

class RollDice extends Component {
	static defaultProps = {
		sides: ['one', 'two', 'three', 'four', 'five', 'six'],
	};
	constructor(props) {
		super(props);
		this.state = { die1: 'one', die2: 'one', rolling: false };
		this.roll = this.roll.bind(this);
	}

	roll() {
		const rand1 = this.props.sides[Math.floor(Math.random() * 6)];
		const rand2 = this.props.sides[Math.floor(Math.random() * 6)];
		this.setState({ die1: rand1, die2: rand2, rolling: true });

		// wait 1sec and then set rolling to false
		setTimeout(() => {
			this.setState({ rolling: false });
		}, 1000);
	}

	render() {
		return (
			<div className='RollDice'>
				{[...Array(this.props.count).keys()].map((_, i) => (
					<Die die={this.state.die1} rolling={this.state.rolling} key={i} />
				))}
				{/* <Die die={this.state.die2} rolling={this.state.rolling} /> */}
				<button
					type='button'
					className='btn'
					onClick={this.roll}
					disabled={this.state.rolling}
				>
					{this.state.rolling ? 'Loading...' : 'Roll Dice!'}
				</button>
			</div>
		);
	}
}

export default RollDice;
