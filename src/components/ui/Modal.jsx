import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const Backdrop = props => {
	return <div className='backdrop' />;
};

const ModalOverlay = props => {
	return (
		<div className='modal'>
			<div className='content'>
				{props.children}
			</div>
		</div>
	);
};

const poratlElement = document.getElementById('overlays');

const Modal = props => {
	return (
		<>
			{createPortal(<Backdrop />, poratlElement)}
			{createPortal(
				<ModalOverlay>
					{props.children}
				</ModalOverlay>,
				poratlElement
			)}
		</>
	);
};

export default Modal;

