import React, {
	ReactElement,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';

interface ThemeContext {
	currentTheme: string;
	toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContext>({
	currentTheme: 'dark',
	toggleTheme: () => undefined,
});

export const ThemeProvider: React.FC<{ children: ReactElement }> = ({
	children,
}) => {
	//const systemIsDark = window.matchMedia(
	//	'(prefers-color-scheme: dark)'
	//).matches;
	//const systemThemeMode = systemIsDark ? 'dark' : 'light';

	const [themeName, setThemeName] = useState('light');

	useEffect(() => {
		const changeTheme = (e: MediaQueryListEvent) => {
			setThemeName(e.matches ? 'dark' : 'light');
		};

		window
			.matchMedia('(prefers-color-scheme: dark')
			.addEventListener('change', changeTheme);

		return () => {
			window
				.matchMedia('(prefers-color-scheme: dark')
				.removeEventListener('change', changeTheme);
		};
	}, []);

	useEffect(() => {
		if (themeName === 'dark') {
			document.body.classList.remove('light');
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
			document.body.classList.add('light');
		}
	}, [themeName]);

	const toggleTheme = () => {
		setThemeName(themeName === 'dark' ? 'light' : 'dark');
	};

	const contextValue = {
		currentTheme: themeName,
		toggleTheme: toggleTheme,
	};

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	return useContext(ThemeContext);
};
