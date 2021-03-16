import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
function ReactModalDemo() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'gray',
          },
          content: {
            color: 'blue',
            maxHeight: '50vh',
          },
        }}
      >
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
        </div>
      </Modal>
    </div>
  );
}

export default ReactModalDemo;
