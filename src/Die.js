import { Component } from 'react';
import './Die.css';

class Die extends Component {
	render() {
		const { num } = this.props;
		return (
			<div>
				{num === 2 ? (
					<i className='fas fa-dice-two die'></i>
				) : (
					<i className='fas fa-dice-five die'></i>
				)}
			</div>
		);
	}
}

export default Die;
