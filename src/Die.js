import { Component } from 'react';
import './Die.css';

class Die extends Component {
	render() {
		const { die } = this.props;
		return (
			<div className='Die'>
				<i className={`fas fa-dice-${die} die`}></i>
			</div>
		);
	}
}

export default Die;
