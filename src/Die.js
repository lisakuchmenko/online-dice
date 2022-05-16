import { Component } from 'react';
import './Die.css';

class Die extends Component {
	render() {
		const { die, rolling } = this.props;
		return (
			<div className='Die'>
				<i className={`fas fa-dice-${die} die ${rolling && 'rolling'}`}></i>
			</div>
		);
	}
}

export default Die;
