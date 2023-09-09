import AccordionItem from './AccordionItem';
import styles from './Accordion.module.css';

const listItems = [
	{ title: "Muchomor Sromotnikowy", content: "Grzyb trujący" },
	{ title: "Czubajka Kania", content: "Grzyb jadalny" },
	{ title: "Borowik Szlachetny", content: "Grzyb jadalny" },
	{ title: "Łysiczka Lancetowata", content: "Grzyb psychodeliczny" },
	{ title: "Peyotl", content: "To jest kaktus! ale też psychodeliczny" },
];

const Accordion = () => {
	const listItem = listItems.map(item =>
		<li className={styles.list}><AccordionItem title={item.title} content={item.content}/></li>
	);
	
	return (
		<div className={styles.accordionList}>
			<ul className={styles.list}>{listItem}</ul>
		</div>
	);
};
export default Accordion;