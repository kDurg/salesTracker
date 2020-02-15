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
                date: '',
                membershipLevel: '',
                name: '',
                salesPerson: '',
            },
            companyFormData: [],
            searchedText: '',
            userLevel: props.userLevel
        };

        // BIND THIS ACROSS FUNCTIONS
        //   this.getSummonerData = this.getSummonerData.bind(this);
        //   this.getMostRecentMatchData = this.getMostRecentMatchData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //   this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(props) {
        this.getFieldsData();
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

    getFieldsData(){
        // THIS IS TO BE USED SERVERSIDE TO JOIN TABLES AND RETURN A DATA OBJECT
        // NEED TO CHECK FOR REQUIRED FIELDS DATA USED IN ADD SALE SHEET

        // MAKE A CALL TO GET THE ARRAY OF FIELDS REQUIRED TO ENTER SALE
        let returnedFields = ['cid', 'date', 'membershipLevel', 'name', 'salesperson'];
        let formFields = {fields: returnedFields};
        
        // Lets add the membership
        returnedFields.forEach(field =>{
            if (field = 'membershipLevel'){

                // MAKE A CALL TO CHECK DB FOR MEMBERSHIP LEVELS
                let returnedMemberships = ['Yearly', 'Monthly', '8-pass', '4-Pass'];
                formFields= {
                    fields: returnedFields,
                    memberships: returnedMemberships
                };
            }
        });

        this.renderForm(formFields);
    }

    renderForm(fieldData) {

        console.log('RenderFormData: ', fieldData);
        // ADD LABEL AND INPUT FOR EACH FIELD (NOT MEMBERSHIPLEVEL)
        
        
        // IF THERE IS A MEMBERSHIP, LOOP THROUGH AND ADD AN OPTION FOR EACH MEMBERSHIP

        // return (
        //     <Form>
        //         <FormGroup>
        //             <Label for='saleName'>Name</Label>
        //             <Input type='text' name='name' id='saleName' placeholder='Jane Doe' />
        //         </FormGroup>
        //         <FormGroup>
        //             <Label for='saleDate'>Date</Label>
        //             <Input type='date' name='date' id='saleDate' placeholder='6/1/2020' />
        //         </FormGroup>
        //         <FormGroup>
        //             <Label for='saleCID'>Customer ID#</Label>
        //             <Input type='number' name='cid' id='saleCID' placeholder='1234567' />
        //         </FormGroup>
        //         <FormGroup>
        //             <Label for='membership'>Membership</Label>
        //             <Input type="select" name="selectMembership" id="membershipLevel">
        //                 {/* import options from props */}
        //                 <option>1</option>
        //                 <option>2</option>
        //                 <option>3</option>
        //                 <option>4</option>
        //                 <option>5</option>
        //             </Input>
        //         </FormGroup>
        //     </Form>
        // )
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
                        <FormControlCard
                            handleChange={(data) => this.handleChange(data)}
                            // placeholder= {props}
                            // value= {props}
                            type='addSaleForm'
                        />

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
        return (
            <>
                {this.renderUserLevel(this.state.userLevel)}
            </>
        )

    }

}