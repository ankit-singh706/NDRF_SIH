import React from 'react'
import disaster from '../assets/disaster.png'
import backIcon from '../assets/back.png'
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show
        ? 'modal display-block'
        : 'modal display-none'

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {/* {children}

                <button type='button' onClick={handleClose}>
                    Close
                </button> */}
                <div className='modal-left-section'>
                    <div className='modal-top-section'>
                        <img
                            src={backIcon}
                            alt='back'
                            width='35px'
                            className='back'
                            onClick={handleClose}
                        />
                        <h1 className='modal-heading'>
                            Village of Khurda drowned in flood
                        </h1>
                    </div>
                    <div className='media-container'>
                        <img src={disaster} alt='disaster' className='media' />
                    </div>
                    <div className='location'>
                        Khurda,Odisha | 20.5° N/ 89.7° E
                    </div>
                </div>
                <div className='modal-right-section'></div>
            </section>
        </div>
    )
}

export default Modal
