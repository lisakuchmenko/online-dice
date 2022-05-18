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
		this.state = {
			num: ['one'],
			rolling: false,
		};
		this.roll = this.roll.bind(this);
	}

	roll() {
		this.setState({
			num: [...Array(this.props.count).keys()].map(
				(_, i) => this.props.sides[Math.floor(Math.random() * 6)]
			),
			rolling: true,
		});

		// wait 1sec and then set rolling to false
		setTimeout(() => {
			this.setState({ rolling: false });
		}, 1000);
	}

	render() {
		return (
			<div className='RollDice'>
				{[...Array(this.props.count).keys()].map((_, i) => (
					<Die
						die={this.state.num[i] ? this.state.num[i] : 'one'}
						rolling={this.state.rolling}
						key={i}
					/>
				))}
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
