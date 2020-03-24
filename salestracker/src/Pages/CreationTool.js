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
		this.props = props;
	}

	componentDidMount() {
		if (!this.state.requiredDataLoaded) {
			this.getCreationToolFormData();
		}
	}

	componentDidUpdate() {
		console.log('STATE CHANGED: ', this.state)
	}

	getCreationToolFormData() {
		let companyDataFields = [];
		let locationDataFields = [];
		let userDataFields = [];
		let servicesDataFields = [];
		let requiredDataFields = [];

		// ************** SET UP API REQUEST FOR REQUIRED FIELDS

		// ************** FAKE RETURNED DATA
		companyDataFields = [
			{ description: 'Company ID', tableName: 'companyid', placeholder: '123456', valueType: 'int', formType: 'numberInput'},
			{ description: 'Company Name', tableName: 'friendlyname', placeholder: 'Kyles Cats', valueType: 'string', formType: 'textInput' },
			{ description: 'Company DB Name', tableName: 'name', placeholder: 'kylescats', valueType: 'string', formType: 'textInput' },
		]

		locationDataFields = [
			// THIS WILL BE FOR EACH LOCATION
			[
				{ description: 'Location Name', tableName: 'friendlyname', placeholder: 'Bradburn', valueType: 'string', formType: 'textInput'}, 
				{ description: 'Location City', tableName: 'locationcity', placeholder: 'Broomfield', valueType: 'string', formType: 'textInput'}, 
				{ description: 'Location State', tableName: 'locationstate', placeholder: 'CO', valueType: 'string', formType: 'dropdownField'}, 
				{ description: 'Location Zip Code', tableName: 'locationzip', placeholder: '80031', valueType: 'int' , formType: 'numberInput'}, 
				{ description: 'Location Owner', tableName: 'ownerid', placeholder: '', valueType: 'int', formType: 'dropdownField'}, 
			]
		]

		userDataFields = [
			// THIS WILL BE FOR EACH USER

			// locationid, username, password, userid, friendlyname, userlevel, defaultscreen, colormode
			[
				{ description: 'Primary Location', tableName: 'locationid', placeholder: '111 - Bradburn', valueType: 'int', formType: 'dropdownField'},
				{ description: 'Username', tableName: 'username', placeholder: 'johndoe123', valueType: 'string', formType: 'textInput'},
				{ description: 'Password', tableName: 'password', placeholder: 'Password_1', valueType: 'string', formType: 'textInput'},
				{ description: 'Name', tableName: 'friendlyname', placeholder: 'John Doe', valueType: 'string', formType: 'textInput'},
				{ description: 'User Level', tableName: 'userlevel', placeholder: '', valueType: 'string', formType: 'dropdownField'},
				{ description: 'Default Screen', tableName: 'defaultscreen', placeholder: '', valueType: 'string', formType: 'dropdownField'},
			]
		]

		servicesDataFields= [
			// ONLY SET UP TO ACCEPT 10 SALES PARAMETERS AS OF 03.24.2020
			[
				{ description: 'Primary Location', tableName: 'locationid', placeholder: '111 - Bradburn', valueType: 'int', formType: 'dropdownField'},
				{ description: 'Sales Parameter', tableName: 'param1', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput'},
				{ description: 'Primary Location', tableName: 'param2', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput'},
				{ description: 'Primary Location', tableName: 'param3', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput'},
				{ description: 'Primary Location', tableName: 'param4', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput'},
				{ description: 'Primary Location', tableName: 'param5', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput'},
				{ description: 'Primary Location', tableName: 'param6', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput'},
				{ description: 'Primary Location', tableName: 'param7', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput'},
				{ description: 'Primary Location', tableName: 'param8', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput'},
				{ description: 'Primary Location', tableName: 'param9', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput'},
				{ description: 'Primary Location', tableName: 'param10', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput'},
			]
		]


		requiredDataFields= [
			companyDataFields,
			locationDataFields,
			userDataFields,
			servicesDataFields
		]

		this.setState({
		requiredDataLoaded: true,
		requiredDataFields
		})
	}

	renderPage() {
		console.log('current state', this.state);

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
		} else {
			return (
				<h1>NO DATA</h1>
			)
		}
	}
}