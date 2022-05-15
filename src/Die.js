import { Component } from 'react';
import './Die.css';

class Die extends Component {
	render() {
		const { die } = this.props;
		return (
			<div>
				<i className={`fas fa-dice-${die} die`}></i>
			</div>
		);
	}
}

export default Die;
