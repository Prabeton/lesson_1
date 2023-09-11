import { useState } from 'react';
import ThemeButton from './ThemeButton';

const darkTheme ={
	backgroundColor: '#222',
	color: '#777',
};
const lightTheme ={
	backgroundColor: '#777',
	color: '#222',
};

const ThemeProvider = ( {children} ) => {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};
	const theme = isDarkMode ? darkTheme : lightTheme;

	return (
		<div style={{ ...theme, height: '100vh' }}>
			<ThemeButton onClick={toggleTheme} />
			{children}
		</div>
	);
}
export default ThemeProvider;