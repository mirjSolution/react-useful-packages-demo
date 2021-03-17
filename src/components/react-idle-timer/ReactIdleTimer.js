// npm install react-idle-timer --save
import React, { useRef, useState } from 'react';
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ReactIdleTimer() {
  const [idle, setIdle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);
  const onIdle = () => {
    console.log('User on idle');
    setIdle(true);
    setModalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
  };

  const logOut = () => {
    setModalIsOpen(false);
    setIsLoggedIn(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log('User is logged out');
  };

  const stayActive = () => {
    setModalIsOpen(false);
    setIdle(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log('User is active');
  };

  return (
    <div>
      {isLoggedIn ? <h2>Hello Rico</h2> : <h2>Hello Guest</h2>}
      <Modal isOpen={isLoggedIn ? modalIsOpen : false}>
        <h2>You have been idle</h2>
        <p>you will be logged out soon</p>
        <div>
          <button onClick={logOut}>Log me out</button>
          <button onClick={stayActive}>Keep me signed in</button>
        </div>
      </Modal>
      <IdleTimer
        ref={idleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
        stopOnIdle={idle}
      >
        {idle ? (
          <button onClick={() => setIdle(false)}>User on idle</button>
        ) : null}
      </IdleTimer>
    </div>
  );
}

export default ReactIdleTimer;
