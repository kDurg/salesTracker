import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToastMessage = (props) => {

	switch (props.statusType) {
		case 'error':
			return (
				<div className="p-3 bg-danger my-2 rounded">
					{console.log('Does this shizzle work?')}
					<Toast>
						<ToastHeader>Reactstrap</ToastHeader>
						<ToastBody>This is a toast on a white background — check it out!</ToastBody>
					</Toast>
				</div>
			)

		case 'success':
			return (
				<div className="p-3 bg-info my-2 rounded">
					<Toast>
						<ToastHeader>Success!</ToastHeader>
						<ToastBody>{props.statusMessage}</ToastBody>
					</Toast>
				</div>
			)

		default:
			console.log('no TOAST for you', props);
			return;
	}
}

export default ToastMessage