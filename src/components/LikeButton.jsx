import styles from './LikeButton.module.css';

function LikeButton ( { count, onClick } ) {
	return(
		<button className={styles.plusone} onClick={onClick}>{count}</button> 
	);
}
export default LikeButton;
