import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastMessage = (props) => {

	console.log('yay error')
	switch (props.type) {
		case 'error':
			return (
				<>
					<div className="p-3 my-2 rounded">
						{console.log('Does this shizzle work?')}
						<Toast>
							<ToastHeader>Reactstrap</ToastHeader>
							<ToastBody>This is a toast on a white background — check it out!</ToastBody>
						</Toast>
					</div>
				</>
			)

			default:
				console.log('no TOAST for you', props)
	}
}

export default ToastMessage