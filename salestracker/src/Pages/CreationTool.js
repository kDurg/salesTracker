import React from 'react';
// import { Col, Row, Button } from 'reactstrap';

// IMPORT COMPONENTS
import FormControlCard from '../Components/FormControlCard';
import LeftBar from '../Components/LeftBar';
import ToastMessage from '../Components/ToastMessages';

export default class CreationTool extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {},
			invalidForm: false,
			requiredDataLoaded: true,
		};

		// BIND THIS ACROSS FUNCTIONS
		this.renderPage = this.renderPage.bind(this);
		this.props = props;
	}

	renderPage() {
		console.log('current state', this.state)

		return (
			<>
				{/* <LeftBar /> */}
				<>
					<FormControlCard
						cardTitle='Company Data'
					/>
					<FormControlCard
						cardTitle='Locations'
					/>
					<FormControlCard
						cardTitle='Users'
					/>
					<FormControlCard
						cardTitle='Services'
					/>
				</>

				{this.state.invalidForm === false ?
					<>
						<FormControlCard
							buttonText='Save'
							// onClick={this.handleSubmit}
							type='button'
						/>
						<FormControlCard
							buttonText='Clear'
							// onClick={this.clearForm}
							type='button'
						/>
					</>
					: <h1>invalid form: {this.state.invalidForm}</h1>}

			</>
		)
	}

	render() {
		if (this.state.requiredDataLoaded && this.props.userData.userLevel === 'admin') {
			console.log('PROPS: ', this.props.userData.userLevel, this.props, this.state)
			return (
				<>
					<div className='creationToolDiv'>

						<h1>Creation Tool</h1>
						{this.renderPage()}
					</div>
				</>
			)
		}
	}
}