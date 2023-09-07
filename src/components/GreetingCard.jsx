import styles from './GreetingCard.module.css';

function GreetingCard( {name} ) {
	return (
		<div className={styles.card}>
			Hello {name}!
		</div>
	);
}
export default GreetingCard;