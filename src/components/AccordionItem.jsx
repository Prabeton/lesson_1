import styles from './AccordionItem.module.css';
import { useState } from 'react';


const AccordionItem = ( { title, content } ) => {
	const [visible, setVisible] = useState(false);
	const changeVisible = () => {
		setVisible(prevState => !prevState);
	}
	
	return (
		<div className={styles.accordionItem}>
			<div className={styles.title} onClick={changeVisible}>{title}</div>
			{ visible && (<div className={styles.content}>{content}</div>) }
		</div>
	);
}
export default AccordionItem;