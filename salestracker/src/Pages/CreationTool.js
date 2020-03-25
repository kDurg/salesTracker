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
		console.log('RENDER FIELD: ', type, props);

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
					type='standardField'
				/>
			);
		} else {
			return (<h5>Uh Oh. {type}</h5>)
		}
	}

	renderForm(props) {
		if (props) {
			let fieldsGroup = props[0];

			switch (fieldsGroup) {

				case 'companyDataFields':
					let companies = props[1];
					return (
						<div className='formGroup'>
							<h3 className='formGroupHeader'>Company</h3>
							{companies.map(company => {
								let type = 'text';
								return (this.renderField(type, company));
							})
							}
						</div>
					)
					break;

				case 'locationDataFields':
					let locations = props[1];
					let that = this;
					return (
						<div className='formGroup'>
							<h3 className='formGroupHeader'>Locations</h3>

							{locations.map(location => {
								console.log('locationDataFields LOCATION', location)

								return (
									Object.entries(location).map(locationField => {
										// console.log('locationDataFields', locationField[1])
										let type = 'text'
										return(that.renderField(type, locationField[1]))
									})
								)
							})}
						</div>
					)

				default:
					return <p>'DEFAULT CASE {fieldsGroup}'</p>
			}

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