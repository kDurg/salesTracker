import React from 'react';

const FormControlCard = (props)=>{
    console.log ('jamacian me crazy',  props)
    switch (props.type){
        
        case 'textInput':
            return <p>'YAY THIS WORKS '</p>

        default:
            return <p>'DEFAULT CASE'</p>
    }
}

export default FormControlCard;