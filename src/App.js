import './App.css';
import ReactColorPicker from './components/react-color-picker/ReactColorPicker';
import ReactCountup from './components/react-countup/ReactCountup';
import ReactIcons from './components/react-icons/ReactIcons';
import ReactIdleTimer from './components/react-idle-timer/ReactIdleTimer';
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
      <h1 style={{ color: 'red' }}>REACT COUNTUP</h1>
      <ReactCountup />
      <h1 style={{ color: 'red' }}>REACT IDLE TIMER</h1>
      <ReactIdleTimer />
      <h1 style={{ color: 'red' }}>REACT COLOR PICKER</h1>
      <ReactColorPicker />
    </div>
  );
}

export default App;
