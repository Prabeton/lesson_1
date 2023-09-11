import styles from './ThemeButton.module.css';

const ThemeButton = ( { onClick } ) => {
	return (
	<button className={styles.themeButton} onClick={onClick}>
		Toggle Theme
	</button>
	);
}
export default ThemeButton;