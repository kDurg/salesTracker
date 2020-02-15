import React from 'react';
import { Button, Input, Table, Form, FormGroup, Label, FormText } from 'reactstrap';

const FormControlCard = (props)=>{
    switch (props.type){

        case 'addSaleForm':
            return (
                <Form>
                    <FormGroup>
                        <Label for='saleName'>Name</Label>
                        <Input type='text' name='name' id='saleName' placeholder='Jane Doe' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='saleDate'>Date</Label>
                        <Input type='date' name='date' id='saleDate' placeholder='6/1/2020' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='saleCID'>Customer ID#</Label>
                        <Input type='number' name='cid' id='saleCID' placeholder='1234567' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='membership'>Membership</Label>
                        <Input type="select" name="selectMembership" id="membershipLevel">
                            {/* import options from props */}
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                </Form> 
            )

        case 'dropdown':
            // DROPDOWN
            return;
        
        
        case 'textInput':
            return (
                <Input
                    onChange= {props.handleChange}
                    placeholder= {props.placeholder ? props.placeholder : null}
                    value= {props.searchedValue}
                />
            )

        default:
            return <p>'DEFAULT CASE'</p>
    }
}

export default FormControlCard;