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
		this.renderNewForm = this.renderNewForm.bind(this);
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

	renderNewField(type, props) {
		// console.log('RENDER FIELD: ', type, props);

		if (type !== 'select') {
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
		} else {
			return (<h5>Uh Oh. {type}</h5>)
		}
	}

	renderNewForm(props) {
		if (props) {
			// console.log('[LOG] fieldsgroup PROPS: ', props)
			let fieldType, sectionName;
			let requiredFields = props[1];
			let sectionDBName = props[0];

			let sectionTranslation = {
				companyDataFields: 'Company Information',
				locationDataFields: 'Location Settings',
				userDataFields: 'User Settings',
				servicesDataFields: 'Services'
			}

			Object.entries(sectionTranslation).map(fieldName => {
				if (fieldName[0] === sectionDBName){
					sectionName = fieldName[1]
				}
			})

			return (
				<div className='formGroup'>
					<h3 className='formGroupHeader'>{sectionName}</h3>
					{requiredFields.map(requiredField => {
						return (this.renderNewField(fieldType, requiredField));
					})}
				</div>
			)
		}
	}

	render() {
		if (this.props.creationToolDataLoaded && this.props.userData.userLevel === 'godmode') {
			// console.log('PROPS: ', this.props.userData.userLevel, this.props, this.state)
			let creationToolSegments = this.props.creationToolData;

			return (
				<>
					<div className='creationToolContainer'>
						<h1>Creation Tool</h1>
						{Object.entries(creationToolSegments).map(segment => {
							return this.renderNewForm(segment)
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