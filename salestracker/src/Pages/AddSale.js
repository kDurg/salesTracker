import React from 'react';
import { Col, Row, Button } from 'reactstrap';

// IMPORT COMPONENTS
import FormControlCard from '../Components/FormControlCard';

export default class AddSale extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {},
			companyFormFields: [],
			searchedText: '',
			userFriendlyName: props.userFriendlyName,
			userLevel: props.userLevel,
			invalidForm: 'true'
		};

		// BIND THIS ACROSS FUNCTIONS
		this.clearForm = this.clearForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderForm = this.renderForm.bind(this);
	}

	componentDidMount() {
		this.serverGetFieldsData();
	}

	componentDidUpdate() {
		console.log('THis is STATE: ', this.state)
		let stateForm = this.state.form;

		console.log('values length: ', Object.values(stateForm).length)

		// *************** NEED TO CHECK TO SEE IF THERE ARE CHANGES TO ENABLE SAVE BUTTON
		if (this.state.invalidForm == 'true') {
			if (Object.values(stateForm).length !== 0 && Object.values(stateForm)[0] !== '') {
				console.log('valid', Object.values(stateForm))
				this.setState({ invalidForm: 'false' })
			}
		} else if (this.state.invalidForm == 'false') {
			if (Object.values(stateForm).length == 0 || Object.values(stateForm)[0] == '') {
				console.log('not valid', Object.values(stateForm))
				this.setState({ invalidForm: 'true' })
			}
		}

	}

	clearForm() {
		this.setState({ form: {} })
	}

	handleChange(event) {
		console.log(event.target.value, event.target.name)
		let inputText = event.target.value;
		let inputField = event.target.name;
		let form = { ...this.state.form };
		form[inputField] = inputText;

		this.setState({ form });
	}

	handleSubmit(event) {
		this.validateRequiredFields();
	}

	renderField(type, name, id, placeholder, friendlyFieldName) {
		let data = { type, name, id, placeholder, friendlyFieldName };

		if (type !== 'select') {
			return (
				<FormControlCard key={id}
					data={data}
					handleChange={(data) => this.handleChange(data)}
					type='standardField'
					value={this.state.form[name]}
				/>
			);

			// FOR DROPDOWN OPTIONS
		} else if (type == 'select') {
			let options = this.state.companyFormMemberships;
			return (
				<FormControlCard key={id}
					data={data}
					dropdownOptions={options}
					onChange={(data) => this.handleChange(data)}
					placeholder='Select...'
					type='dropdownField'
					value={this.state.form[name]}
				/>
			);
		}
	}

	renderForm(props) {
		if (props) {
			let friendlyFieldName = props[0].toUpperCase() + props.slice(1);
			let id = `sale${friendlyFieldName}`;
			let placeholder, type;

			// console.log(props)
			switch (props) {
				case 'cid':
					friendlyFieldName = 'Customer ID';
					placeholder = '1234567';
					return (
						this.renderField(type, props, id, placeholder, friendlyFieldName)
					);

				// FOR DATE PICKER INPUTS
				case 'date':
					placeholder = '6/1/2020';
					type = 'date';
					return (
						this.renderField(type, props, id, placeholder, friendlyFieldName)
					);

				// FOR DROPDOWN INPUTS
				case 'membershipLevel':
					friendlyFieldName = 'Membership Level';
					placeholder = 'Membership Level';
					type = 'select';
					return (
						this.renderField(type, props, id, placeholder, friendlyFieldName)
					);

				case 'name':
					friendlyFieldName = `Customer ${friendlyFieldName}`;
					placeholder = 'Jane Doe';
					type = 'text';
					return (
						this.renderField(type, props, id, placeholder, friendlyFieldName)
					);

				case 'salesperson':
					placeholder = this.state.userFriendlyName;
					type = 'text';
					return (
						this.renderField(type, props, id, placeholder, friendlyFieldName)
					);

				default:
					type = 'text';
					return (
						this.renderField(type, props, id, placeholder, friendlyFieldName)
					);
			}
		}
	}

	renderUserLevel(userLevel) {
		switch (userLevel) {

			case 'admin':
				// ABILITY TO SWITCH BUISNESSES VIA SEARCH
				// ABILITY TO SEE ALL USER DATA
				// ABILITY TO EDIT ALL DATA (IF ENABLED)
				return (
					<>
						<p>PROPS: {this.state.userLevel}</p>
						{/* <FormControlCard
							handleChange={(data) => this.handleChange(data)}
							// placeholder= {props}
							// value= {props}
							type='addSaleForm'
						/> */}

					</>
				);

			case 'manager':
				// ABILITY TO SEE ALL USER DATA
				// ABILITY TO ADD/EDIT ALL DATA
				return (
					// <input
					<p>PROPS: {this.state.userLevel}</p>
					// />
				);

			case 'user':
				// ABILITY TO ADD/EDIT DATA ASSOCIATED WITH USER
				// ABIILITY TO VIEW DATA ASSOCIATED WITH USER
				return (
					// <input
					<p>PROPS: {this.state.userLevel}</p>
					// />
				);

			default:
				return (console.log(`[ERROR]: NO USER LEVEL DEFINED`));
		}
	}

	serverGetFieldsData() {
		// THIS IS TO BE USED SERVERSIDE TO JOIN TABLES AND RETURN A DATA OBJECT

		// MAKE A CALL TO GET THE ARRAY OF FIELDS REQUIRED TO ENTER SALE
		let returnedFields = ['cid', 'date', 'membershipLevel', 'name', 'salesperson'];
		let returnedMemberships = [];

		// SEARCH TO SEE IF THERE ARE MEMBERSHIP LEVELS
		returnedFields.map(field => {
			if (field = 'membershipLevel') {
				// MAKE A CALL TO CHECK DB FOR MEMBERSHIP LEVELS
				returnedMemberships = ['Yearly', 'Monthly', '8-pass', '4-Pass'];
			} else {
				returnedMemberships = null;
			}
		});

		this.setState({
			companyFormFields: returnedFields,
			companyFormMemberships: returnedMemberships
		});
	}

	validateRequiredFields() {
		// LOOP THROUGH REQUIRED FIELDS AND CHECK THERE IS A SAVED VALUE IN STATE FOR EACH FIELD
		let requiredFields = this.state.companyFormFields;
		let formFields = this.state.form;
		let filledFields = [];

		Object.keys(formFields).map(field => {
			filledFields.push(field)
		});

		console.log('filled fields', filledFields)

		if (filledFields == []) {
			// POP ALERT TO WARN NOTHING HAS BEEN ADDED
		}

		requiredFields.map(requiredField => {
			if (requiredField.includes(filledFields)) {
				console.log('does not contain ' + requiredField)
			} else {
				console.log('all fields accounted for')
			}
		})
	}

	render() {
		if (this.state.companyFormFields) {
			const companyFields = this.state.companyFormFields;
			return (
				<>
					{this.renderUserLevel(this.state.userLevel)}
					<div className='addSaleDiv'>
						{companyFields.map(name => {
							return this.renderForm(name)
						})}
						{this.state.invalidForm == 'false' ?
							<>
								<FormControlCard
									buttonText='Save'
									// disabled={this.state.invalidForm}
									onClick={this.handleSubmit}
									type='button'
								/>
								<FormControlCard
									buttonText='Clear'
									// disabled={this.state.invalidForm}
									onClick={this.clearForm}
									type='button'
								/>
							</>
							: null}
					</div>
				</>
			);
		}
	}

}