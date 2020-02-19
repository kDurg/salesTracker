import React from 'react';
import { Col, Row, Button, Input, Table } from 'reactstrap';
import { Form, FormGroup, Label, FormText } from 'reactstrap';


// IMPORT COMPONENTS
import FormControlCard from '../Components/FormControlCard';

export default class AddSale extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				cid: '',
				customerName: '',
				date: '',
				membershipLevel: '',
				salesPerson: '',
			},
			companyFormFields: [],
			searchedText: '',
			userLevel: props.userLevel
		};

		// BIND THIS ACROSS FUNCTIONS
		//   this.getSummonerData = this.getSummonerData.bind(this);
		//   this.getMostRecentMatchData = this.getMostRecentMatchData.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.renderForm = this.renderForm.bind(this);
		//   this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.getFieldsData();
	}

	componentDidUpdate() {
		console.log('THis is STATE: ', this.state)
	}

	handleChange(event) {
		console.log(event.target.value)
		let inputText = event.target.value;
		this.setState({ form: inputText });
	}

	//   handleSubmit(data) {

	//     data.preventDefault();
	//     this.setState({recentGameRequestFinished:false});
	//     this.getSummonerData(this.state.player.searchName);
	// }

	getFieldsData() {
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

	renderField(type, name, id, placeholder, friendlyFieldName) {
		let data = { type, name, id, placeholder, friendlyFieldName };

		if (type !== 'select') {
			return (
				<FormGroup>
					<Label for={id}>{friendlyFieldName}</Label>
					<Input type={type} name={name} id={id} placeholder={placeholder} />
				</FormGroup>
			)

			// FOR DROPDOWN OPTIONS
		} else if (type == 'select') {
			let options = this.state.companyFormMemberships;
			return (
				<FormGroup>
					<FormControlCard
						dropdownOptions={options}
						data={data}
						type='dropdownField'
					/>
				</FormGroup>
			)
		}
	}

	renderForm(props) {
		if (props) {
			let friendlyFieldName = props[0].toUpperCase() + props.slice(1);
			let id = `sale${friendlyFieldName}`;
			let placeholder, type;

			switch (props) {

				case 'cid':
					friendlyFieldName = 'Customer ID'
					placeholder = '1234567'
					return (
						this.renderField(type, props, id, placeholder, friendlyFieldName)
					)

				// FOR DATE PICKER INPUTS
				case 'date':
					placeholder = '6/1/2020';
					type = 'date';
					return (
						this.renderField(type, props, id, placeholder, friendlyFieldName)
					)

				// FOR DROPDOWN INPUTS
				case 'membershipLevel':
					friendlyFieldName = 'Membership Level';
					placeholder = 'Membership Level';
					type = 'select';
					return (
						this.renderField(type, props, id, placeholder, friendlyFieldName)
					)

				default:
					type = 'text'
					return (
						this.renderField(type, props, id, placeholder, friendlyFieldName)
					)
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
				)

			case 'manager':
				// ABILITY TO SEE ALL USER DATA
				// ABILITY TO ADD/EDIT ALL DATA
				return (
					// <input
					<p>PROPS: {this.state.userLevel}</p>
					// />
				)

			case 'user':
				// ABILITY TO ADD/EDIT DATA ASSOCIATED WITH USER
				// ABIILITY TO VIEW DATA ASSOCIATED WITH USER
				return (
					// <input
					<p>PROPS: {this.state.userLevel}</p>
					// />
				)

			default:
				return (console.log(`[ERROR]: NO USER LEVEL DEFINED`))

		}
	}

	render() {
		if (this.state.companyFormFields) {
			const companyFields = this.state.companyFormFields;
			return (
				<>
					{this.renderUserLevel(this.state.userLevel)}
					{companyFields.map(name => {
						return this.renderForm(name)
					})}
				</>
			)
		}
	}

}