import React, {useEffect, useRef } from 'react'

const Modal = (props) => {
    const modalRef = useRef(null)

    useOnClickOutside(modalRef, () => props.closeModal());

    function useOnClickOutside(ref, handler) {
        useEffect(
          () => {
            const listener = (event) => {
              // Do nothing if clicking ref's element or descendent elements
              if (!ref.current || ref.current.contains(event.target)) {
                return
              }
              handler(event)
            }
            document.addEventListener("mousedown", listener)
            document.addEventListener("touchstart", listener)
            return () => {
              document.removeEventListener("mousedown", listener)
              document.removeEventListener("touchstart", listener)
            }
          },
          [ref, handler]
        )
      }

    const listenForEscKey = event => {
        const { keyCode } = event;
    
        if (keyCode === 27) {
          props.closeModal();
        }
      };
    
      useEffect(() => {
        window.addEventListener('keydown', listenForEscKey);
    
        return () => {
          window.removeEventListener('keydown', listenForEscKey);
        }
      })


    if (!props.showModal) {
        return null
    }
    return (
        <div className="modal">
            <div className="modalContent" ref={modalRef}>
                <span className="close" onClick={props.closeModal}>X</span>
                <p>Hieno modaali!</p>
            </div>
        </div>
    )
}

export default Modal