import { useState } from 'react';
import styles from './Todo.module.css';

const Todo = ( { taskName } ) => {
	const [isChecked, setIsChecked] = useState(false);
	const invertChecked = () => {
		setIsChecked(!isChecked);
	}
	
	return(
		<div className={styles.todo}>
			<label>
				<span className={isChecked ? styles.strikethrough : styles.taskName}>{taskName}</span>
				<input className={styles.checkbox} type="checkbox" checked={isChecked} onChange={invertChecked} />
			</label>	
		</div>
	);
	
	
}
export default Todo;