import { Component } from 'react';
import RollDice from './RollDice';
import './ChooseDice.css';

class ChooseDice extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='chooseDice'>
				<label htmlFor='die-num'>Choose a number of dice:</label>
				<select name='die-num' id='die-num'>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
				</select>
				<RollDice count={5} />
			</div>
		);
	}
}

export default ChooseDice;
