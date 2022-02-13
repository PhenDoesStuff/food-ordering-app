import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const Backdrop = ({ onClose }) => {
	return <div className='backdrop' onClick={onClose}></div>;
};

const ModalOverlay = props => {
	return (
		<div className='modal'>
			<div className='content'>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
	return (
		<>
			{createPortal(
				<Backdrop onClose={props.onClose} />,
				portalElement
			)}
			{createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</>
	);
};

export default Modal;
