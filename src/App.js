import './App.css';
import ReactCharts from './components/react-charts/ReactCharts';
import ReactColorPicker from './components/react-color-picker/ReactColorPicker';
import ReactCountup from './components/react-countup/ReactCountup';
import ReactCreditCards from './components/react-credit-cards/ReactCreditCards';
import ReactDatePicker from './components/react-date-picker/ReactDatePicker';
import ReactIcons from './components/react-icons/ReactIcons';
import ReactIdleTimer from './components/react-idle-timer/ReactIdleTimer';
import ReactModalDemo from './components/react-modal/ReactModalDemo';
import ReactPlayerDemo from './components/react-player/ReactPlayerDemo';
import ReactSpinnersDemo from './components/react-spinners/ReactSpinners';

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
      <h1 style={{ color: 'red' }}>REACT CREDIT CARDS</h1>
      <ReactCreditCards />
      <h1 style={{ color: 'red' }}>REACT DATE PICKER</h1>
      <ReactDatePicker />
      <h1 style={{ color: 'red' }}>REACT VIDEO PLAYER</h1>
      <ReactPlayerDemo />
      <h1 style={{ color: 'red' }}>REACT LOADING INDICATOR</h1>
      <ReactSpinnersDemo />
      <h1 style={{ color: 'red' }}>REACT CHARTS</h1>
      <ReactCharts />
    </div>
  );
}

export default App;
