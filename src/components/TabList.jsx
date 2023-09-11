import React, {useState } from 'react';
import styles from './TabList.module.css';

const TabList = ( { children } ) => {
	const [activeTab, setActiveTab] = useState(children[0]?.props.label);
					// children [0]? - if not, it does not cause an error
	const handleTabClick = (label) => {
		setActiveTab(label);
	};
	
	return (
		<div className={styles.tabList}>
		  {children.map((child) => {
			const label = child.props.label;
			// const content = child.props.children;
			return React.cloneElement(child, {
				key: label,
			  	isActive: label === activeTab,
			  	onClick: handleTabClick,
			});
		  })}
		  
		</div>
	);
	
	
}
export default TabList;