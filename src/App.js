import './App.css';
import ReactIcons from './components/react-icons/ReactIcons';
import ReactModalDemo from './components/react-modal/ReactModalDemo';
import ReactToastify from './components/react-toastify/ReactToastify';
import ReactTooltip from './components/react-tooltip/ReactTooltip';

function App() {
  return (
    <div className='App'>
      <h1 style={{ color: 'red' }}>REACT ICONS</h1>
      <ReactIcons />
      <h1 style={{ color: 'red' }}>REACT TOASTIFY</h1>
      <ReactToastify />
      <h1 style={{ color: 'red' }}>REACT MODAL</h1>
      <ReactModalDemo />
      <h1 style={{ color: 'red' }}>REACT TOOLTIP</h1>
      <ReactTooltip />
    </div>
  );
}

export default App;
