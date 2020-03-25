import React from 'react';
import { Button, Input, Table, Form, FormGroup, Label, FormText } from 'reactstrap';

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
		this.renderForm = this.renderForm.bind(this);
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

	renderField(type, props) {
		console.log('RENDER FIELD: ', type, props)

		if (type !== 'select') {
			return (

				// ************ NEED TO DEFINE DATA
				<FormControlCard key={props.name}
					data={props}
					type='standardField'
				/>
			)
		}
	}

	renderForm(props) {
		if (props) {

			switch (props[0]) {

				case 'companyDataFields':

					let field = props[1];
					console.log('fields data: ', field)
					field.map(subField => {
						let data = {
							id: subField.tableName,
							friendlyFieldName: subField.description,
							type: 'text',
							name: subField.tableName,
							placeholder: subField.placeholder,
							handleChange: '',
							value: ''

						};
						this.renderField(data.type, subField)
					})

				default:
					return <p>'DEFAULT CASE'</p>


			}

		}
	}

	// renderPage() {
	// 	// console.log('current state', this.state);

	// 	if (this.props.creationToolDataLoaded && this.props.creationToolData !== '') {
	// 		return (
	// 			<div className='creationToolPage'>
	// 				{/* <LeftBar /> */}
	// 				<div className='creationToolForm'>
	// 					{/* <FormControlCard
	// 						type='dropdownField'
	// 						cardTitle='Company: '
	// 						data=
	// 					/> */}
	// 					{/* <FormControlCard
	// 						cardTitle='Company Data'
	// 						data={this.renderCompanyData}
	// 					/>
	// 					<FormControlCard
	// 						cardTitle='Locations'
	// 					/>
	// 					<FormControlCard
	// 						cardTitle='Users'
	// 					/>
	// 					<FormControlCard
	// 						cardTitle='Services'
	// 					/> */}
	// 				</div>

	// 				{this.state.invalidForm === false ?
	// 					<>
	// 						<FormControlCard
	// 							buttonText='Save'
	// 							// onClick={this.handleSubmit}
	// 							type='button'
	// 						/>
	// 						<FormControlCard
	// 							buttonText='Clear'
	// 							// onClick={this.clearForm}
	// 							type='button'
	// 						/>
	// 					</>
	// 					: <h1>invalid form: {this.state.invalidForm}</h1>}

	// 			</div>
	// 		)
	// 	}


	// }

	render() {
		if (this.props.creationToolDataLoaded && this.props.userData.userLevel === 'godmode') {
			console.log('PROPS: ', this.props.userData.userLevel, this.props, this.state)
			let creationToolSegments = this.props.creationToolData;

			return (
				<>
					<div className='creationToolDiv'>
						<h1>Creation Tool</h1>
						{Object.entries(creationToolSegments).map(segment => {
							return this.renderForm(segment)
						})
						}
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