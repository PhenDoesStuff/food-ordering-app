import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const Backdrop = ({ onClose }) => {
	return <div className='backdrop' onClick={onClose} />;
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

const Modal = ({ children, onClose }) => {
	return (
		<>
			{createPortal(
				<Backdrop onClose={onClose} />,
				poratlElement
			)}
			{createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				poratlElement
			)}
		</>
	);
};

export default Modal;

