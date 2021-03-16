import './App.css';
import ReactIcons from './components/react-icons/ReactIcons';
import ReactToastify from './components/react-toastify/ReactToastify';

function App() {
  return (
    <div className='App'>
      <h1 style={{ color: 'red' }}>REACT ICONS</h1>
      <ReactIcons />
      <h1 style={{ color: 'red' }}>REACT TOASTIFY</h1>
      <ReactToastify />
    </div>
  );
}

export default App;
