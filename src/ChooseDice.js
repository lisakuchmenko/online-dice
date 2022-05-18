import { Component } from 'react';
import RollDice from './RollDice';
import './ChooseDice.css';

class ChooseDice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedValue: 1,
		};
		this.handleDropdown = this.handleDropdown.bind(this);
	}

	handleDropdown(e) {
		this.setState({ selectedValue: Number(e.target.value) });
	}
	render() {
		return (
			<div className='chooseDice'>
				<label htmlFor='die-num'>Choose a number of dice:</label>
				<select name='die-num' id='die-num' onChange={this.handleDropdown}>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
				</select>
				<RollDice count={this.state.selectedValue} />
			</div>
		);
	}
}

export default ChooseDice;
