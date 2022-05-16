import './App.css';
import RollDice from './RollDice';

function App() {
	return (
		<div className='App'>
			<h1 className='heading-main'>Online Dice</h1>
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

export default App;
