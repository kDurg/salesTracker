import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToastMessage = (props) => {

	console.log('yay error')
	switch (props.type) {
		case 'error':
			return (
				<>
					<div className="p-3 my-2 rounded">
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