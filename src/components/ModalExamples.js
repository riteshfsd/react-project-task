import React, { useState } from 'react';
import Modal from "react-modal";

function ModalExamples() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return(
        <div>
            <button onClick = {() => setModalIsOpen(true)}>Open Modal </button>
            <Modal isOpen = {modalIsOpen} onRequestClose = {() => setModalIsOpen(false)} shouldCloseOnOverlayClick = {()=>setModalIsOpen(false)}
              style = {
                {
                  overlay: {
                    backgroundColor: 'grey'
                  },
                  content: {
                    color: 'orange'
                  }
                }
              }
            >
              <h2>Modal title</h2>
              <p>Modal Body</p>
              <div>
                <button onClick = {()=> setModalIsOpen(false)}>Close</button>
              </div>
            </Modal>
        </div>
    )
}
export default ModalExamples;
