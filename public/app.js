// public/app.js
const App = () => {
    return React.createElement(
        'div',
        { style: { width: '100%', height: '100%' } },
        React.createElement(ExcalidrawLib.Excalidraw)
    );
};

const excalidrawWrapper = document.getElementById('app');
const root = ReactDOM.createRoot(excalidrawWrapper);
root.render(React.createElement(App));
