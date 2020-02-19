import React from 'react';
import { Button, Input, Table, Form, FormGroup, Label, FormText } from 'reactstrap';

const FormControlCard = (props) => {
	let data = props.data;
	switch (props.type) {

		case 'dropdownField':
			let options = props.dropdownOptions;

			return (
				<FormGroup key={data.id}>
					<Label for={data.id}>{data.friendlyFieldName}</Label>
					<Input type={data.type} name={data.name} id={data.id} placeholder={data.placeholder}>
						{options.map(membership => {
							return (
								<FormControlCard key={membership}
									option={membership}
									type='dropdownOption'
								/>
							)
						})}
					</Input>
				</FormGroup>
			);

		case 'dropdownOption':
			return (
				<option value={props.option}>{props.option}</option>
			);

		case 'standardField':
			return (
				<FormGroup key={data.id}>
					<Label for={data.id}>{data.friendlyFieldName}</Label>
					<Input type={data.type} name={data.name} id={data.id} placeholder={data.placeholder} />
				</FormGroup>
			);

		default:
			return <p>'DEFAULT CASE'</p>
	}
}

export default FormControlCard;