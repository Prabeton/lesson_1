import styles from './Tab.module.css';

const Tab = ( { label, isActive, onClick, children} ) => {
	return (
		<div className={styles.tab} onClick={() => onClick(label)}>
			{label}
		
			<div className={styles.content}>{isActive && children}</div>
		</div>
	);
}
export default Tab;