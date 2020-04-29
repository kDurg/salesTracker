import React from 'react';
// import { Button, Input, Table, Form, FormGroup, Label, FormText } from 'reactstrap';

// IMPORT COMPONENTS
import FormControlCard from '../Components/FormControlCard';
// import LeftBar from '../Components/LeftBar';
// import ToastMessage from '../Components/ToastMessages';

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
		// console.log('[LOG] CDU STATE CHANGED: ', this.state)
	}

	getCreationToolFormData() {
		this.getDataAPI('creationtool');
		this.getDataAPI('');
	}

	handleChange(data) {
		console.log('handleChange() in creation tool: ', data);
	}

	renderDropdownData(props) {
		// console.log('[LOG] getDropdownData Props: ', props)
		// MAKE A CALL TO GET ALL DROPDOWN DATA IF EXISTS

		// switch (props.tableName) {

		// 	case 'companyadmin':

		// case 'ownerid': location owner

		// case 'locationstate':

		// case 'userlevel':

		// case 'locationid':

		// case 'defaultscreen':

		// }
	}

	renderField(props, dropdownData) {
		let data;
		switch (props.formType) {
			
			case 'dropdownField':
				console.log('RENDER FIELD: ',  dropdownData);
				if (dropdownData) {

					// need to match dropdown data to field 
					let dropdownOptions = [];
					console.log('YAYAYAYAYAYAYAYA', props, dropdownData)

					data = {
						id: props.name,
						friendlyFieldName: props.description,
						type: props.formType,
						name: props.name,
						placeholder: props.placeholder,
						handleChange: '',
						value: ''
					};

					Object.entries(dropdownData).map(option=> {
						if (option[1] === props.tableName) {
							console.log('THIS IS THE OPTION', option)
							
						}
					})

					return (
						<FormControlCard key={props.name} 
							data={data}
							dropdownOptions={dropdownOptions}
							type='dropdownField'
							onChange={this.handleChange}
						/>
					)

				}

			default:
				data = {
					id: props.name,
					friendlyFieldName: props.description,
					type: props.formType,
					name: props.name,
					placeholder: props.placeholder,
					handleChange: '',
					value: ''
				};
				return (
					<FormControlCard key={props.name}
						data={data}
						type='textField'
					/>
				);
		}
	}

	renderForm(props, creationToolDropdownData) {
		if (props) {
			// console.log('[LOG] fieldsgroup PROPS: ', props, creationToolDropdownData)

			// WE HAVE EACH FIELD COMING IN HERE
			let sectionName;
			let requiredFields = props[1];
			let sectionDBName = props[0];

			let sectionTranslation = {
				companyDataFields: 'Company Information',
				locationDataFields: 'Location Settings',
				userDataFields: 'User Settings',
				servicesDataFields: 'Services'
			};

			Object.entries(sectionTranslation).map(fieldName => {
				if (fieldName[0] === sectionDBName) {
					sectionName = fieldName[1];
				}
			});

			// CHECK TO SEE IF ANY FIELDS HAVE DROPDOWN OPTIONS
			Object.entries(requiredFields).map(field => {
				let fieldData = field[1];
				let formType = field[1].formType;
				let hasDropdown = false;
				let dropdownFieldData;
				let tableName = field[1].tableName;
				
				// CHECK TO SEE IF WE HAVE DROPDOWN OPTIONS FOR MATCHING FIELDS
				if (formType.toLowerCase() === 'dropdownfield'){
					// for (let [key, value] in Object.entries(creationToolDropdownData)) {
					// 	console.log('asdfasdfasdfasdfasdf', tableName, creationToolDropdownData, [key], [value])
					// 	// if (tableName.toLowerCase() === creationToolDropdownData[key]) {
					// 	// }

					// }

					Object.keys(creationToolDropdownData).map(dropdownDataField => {
						if (tableName.toLowerCase() === dropdownDataField.toLowerCase()) {
							console.log('field name: ', fieldData);
							console.log('dropdownDataField: ', dropdownDataField, creationToolDropdownData);


							dropdownFieldData = dropdownDataField;
							hasDropdown = true;
						}
					})
				}
				
				if (hasDropdown) {
					return (
						this.renderField(fieldData, dropdownFieldData)
					)
				}

			});

			return (
				<div className='formGroup'>
					<h3 className='formGroupHeader'>{sectionName}</h3>
					<hr />
					{requiredFields.map(requiredField => {
						return (this.renderField(requiredField, creationToolDropdownData));
					})}
				</div>
			)
		}
	}

	render() {
		if (this.props.creationToolDataLoaded && this.props.userData.userLevel === 'godmode') {
			console.log('PROPS: ', this.props.userData.userLevel, this.props, this.state)
			let creationToolSegments = this.props.creationToolData;
			let creationToolDropdownData = this.props.creationToolDropdownData;

			return (
				<>
					<div className='creationToolContainer'>
						<h1>Creation Tool</h1>
						{Object.entries(creationToolSegments).map(segment => {
							// console.log('segment', segment)
							return this.renderForm(segment, creationToolDropdownData)
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