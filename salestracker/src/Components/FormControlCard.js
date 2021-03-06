import React from 'react';
import { Button, Input, Table, Form, FormGroup, Label, FormText } from 'reactstrap';

const FormControlCard = (props) => {
	let data = props.data;
	switch (props.type) {

		case 'button':
			return (
				<Button disabled={props.disabled} onClick={props.onClick}>{props.buttonText}</Button>
			)

		case 'dropdownField':
			let options = props.dropdownOptions;

			return (
				<FormGroup key={data.id}>
					<Label for={data.id}>{data.friendlyFieldName}</Label>
					<Input type={data.type} name={data.name} id={data.id} onChange={props.onChange} placeholder={data.placeholder}>
						<option selected disabled value='null'>{props.placeholder}</option>
						{options.map(membership => {
							return (
								<FormControlCard key={membership}
									option={membership}
									onChange={props.onChange}
									type='dropdownOption'
								/>
							)
						})}
					</Input>
				</FormGroup>
			);

		case 'dropdownOption':
			return (
				<option
					onChange={props.onChange}
					value={props.option}>{props.option}
				</option>
			);

		case 'standardField':
			return (
				<FormGroup key={data.id}>
					<Label for={data.id}>{data.friendlyFieldName}</Label>
					<Input
						type={data.type}
						name={data.name}
						id={data.id}
						placeholder={data.placeholder}
						onChange={props.handleChange}
						value={props.value}
					/>
				</FormGroup>
			);

		default:
			return <p>'DEFAULT CASE'</p>
	}
}

export default FormControlCard;