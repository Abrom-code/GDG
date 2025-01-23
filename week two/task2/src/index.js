import ReactDom from 'react-dom';
import App from './App';
import './index.css';

const entryPoint = document.getElementById('root');
ReactDom.createRoot(entryPoint).render(<App />);
