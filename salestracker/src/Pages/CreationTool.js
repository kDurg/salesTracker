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
			requiredDataFields: [],
			requiredDataLoaded: false,
		};

		// BIND THIS ACROSS FUNCTIONS
		this.renderPage = this.renderPage.bind(this);
		this.getDataAPI = props.getDataAPI.bind(props);
		this.props = props;
	}

	componentDidMount() {
		if (!this.props.creationToolDataLoaded) {
			this.getCreationToolFormData();
		}
	}

	componentDidUpdate() {
		// console.log('STATE CHANGED: ', this.state)
	}

	getCreationToolFormData() {
		this.getDataAPI('creationtool');
	}

	renderPage() {
		console.log('current state', this.state);

		if (this.props.creationToolDataLoaded && this.props.creationToolData !== ''){
			return (
				<div className='creationToolPage'>
					{/* <LeftBar /> */}
					<div className='creationToolForm'>
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
					</div>
	
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
	
				</div>
			)
		}

		
	}

	render() {
		if (this.props.creationToolDataLoaded && this.props.userData.userLevel === 'godmode') {
			console.log('PROPS: ', this.props.userData.userLevel, this.props, this.state)
			return (
				<>
					<div className='creationToolDiv'>
						<h1>Creation Tool</h1>
						{this.renderPage()}
					</div>
				</>
			)
		} else {
			return (
				<h1>NO DATA</h1>
			)
		}
	}
}