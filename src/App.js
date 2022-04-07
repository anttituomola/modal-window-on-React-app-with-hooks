import './App.css'
import Modal from './components/Modal';
import React, {useState} from 'react';

function App() {
  const [showModal, setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className="App">
      <h1>Modal Practice</h1>
      <button onClick={() =>setModal(true)}>Show modal</button>
      <Modal showModal={showModal} closeModal={closeModal}/>
    </div>
  );
}

export default App;
