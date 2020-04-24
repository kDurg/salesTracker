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
		// console.log('RENDER FIELD: ', props.formType);

		switch (props.formType) {

			case 'dropdownField':
				if (dropdownData) {
					let data = {};
					let dropdown;
					Object.entries(dropdownData).map(dropdownOption => {
						// console.log(dropdownOption, 'dropdown option')

						if (dropdownOption[0].toLowerCase() === props.tableName.toLowerCase()) {
							console.log('YAYAYAYAYAYAYAYAYA', props.tableName)

							let dropdownData = {
								id: props.name ? props.name : props.tableName,
								friendlyFieldName: props.description ? props.description : '',
								type: props.formType ? props.formType : '',
								name: props.name ? props.name : '',
								placeholder: props.placeholder ? props.placeholder : '',
								handleChange: '',
								value: ''
							};

							// ************ GETTING STUCK DUE TO NESTING, RENDERING SHOULD HAPPEN HERE AND BE PASSED UP

							data = dropdownData;
							// return data
						}

					});

					// ********************* THIS IS OUTSIDE OF THE MAP AND ONLY RETURNS THE LAST ITEM
					if (data.length > 0) {
						console.log('data::: ', data)
						return (
							<FormControlCard key={props.description}
								dropdownOptions={data}
								type='dropdownField'
							/>
						);

					}


				}

			default:
				let data = {
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
			let sectionName;
			let requiredFields = props[1];
			let sectionDBName = props[0];

			let sectionTranslation = {
				companyDataFields: 'Company Information',
				locationDataFields: 'Location Settings',
				userDataFields: 'User Settings',
				servicesDataFields: 'Services'
			}

			Object.entries(sectionTranslation).map(fieldName => {
				if (fieldName[0] === sectionDBName) {
					sectionName = fieldName[1]
				}
			})

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