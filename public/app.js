// public/app.js
const App = () => {
    const [theme, setTheme] = React.useState(() => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = isDark ? 'dark' : 'light';
        document.documentElement.classList.add(`theme--${initialTheme}`);
        return initialTheme;
    });

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            document.documentElement.classList.remove(`theme--${prevTheme}`);
            document.documentElement.classList.add(`theme--${newTheme}`);
            return newTheme;
        });
    };

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleChange = (e) => {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.classList.remove('theme--light', 'theme--dark');
            document.documentElement.classList.add(`theme--${newTheme}`);
            setTheme(newTheme);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return React.createElement(
        'div',
        { style: { width: '100%', height: '100%' } },
        [
            React.createElement(
                'button',
                { 
                    id: 'theme-toggle',
                    onClick: toggleTheme,
                    key: 'theme-toggle'
                },
                `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`
            ),
            React.createElement(ExcalidrawLib.Excalidraw, {
                theme: theme,
                key: 'excalidraw'
            })
        ]
    );
};

const excalidrawWrapper = document.getElementById('app');
const root = ReactDOM.createRoot(excalidrawWrapper);
root.render(React.createElement(App));
