import React from 'react';
import { Button, Input, Table, Form, FormGroup, Label, FormText } from 'reactstrap';

const FormControlCard = (props) => {
    let data = props.data;
    switch (props.type) {

        case 'dropdownField':
            let options = props.dropdownOptions;
            console.log('yay? : ', props)
            // return <h1>yay</h1>
            return (
                <FormGroup>
                    <Label for={data.id}>{data.friendlyFieldName}</Label>
                    <Input type={data.type} name={data.name} id={data.id} placeholder={data.placeholder}>
                        {options.map(membership => {
                            return (
                                <FormControlCard 
                                    option = {membership}
                                    type = 'dropdownOption'
                                />
                            )
                        })}
                    </Input>
                </FormGroup>
            )
        
        case 'dropdownOption':
            console.log("FCC Option:", props.option)
            return (<option value={props.option}>{props.option}</option>)

        default:
return <p>'DEFAULT CASE'</p>
    }
}

export default FormControlCard;