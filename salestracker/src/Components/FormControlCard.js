import React from 'react';
import { Button, Input, Table } from 'reactstrap';

const FormControlCard = (props)=>{
    console.log ('jamacian me crazy',  props)
    switch (props.type){
        
        case 'textInput':
            return (
                <Input
                    onChange= {props.onChange}
                    placeholder= {props.placeholder ? props.placeholder : null}
                    value= {props.searchedValue}
                />

            )

        default:
            return <p>'DEFAULT CASE'</p>
    }
}

export default FormControlCard;