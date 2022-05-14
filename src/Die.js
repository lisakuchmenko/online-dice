import './Die.css';

export default function Die(props) {
	const { num } = props;
	return (
		<div>
			{num === 2 ? (
				<i class='fas fa-dice-two die'></i>
			) : (
				<i class='fas fa-dice-five die'></i>
			)}
		</div>
	);
}
