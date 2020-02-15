import React from 'react';
import { Col, Row, Button, Input, Table } from 'reactstrap';

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
      searchedText: '',
      userLevel: props.userLevel
    };

    // BIND THIS ACROSS FUNCTIONS
    //   this.getSummonerData = this.getSummonerData.bind(this);
    //   this.getMostRecentMatchData = this.getMostRecentMatchData.bind(this);
      this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
    let inputText = event.target.value;
    this.setState({form: inputText});
  }

  //   handleSubmit(data) {

  //     data.preventDefault();
  //     this.setState({recentGameRequestFinished:false});
  //     this.getSummonerData(this.state.player.searchName);
  // }

  renderForm(){

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
              handleChange={(data)=>this.handleChange(data)}
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
    return(
      <>
        {this.renderUserLevel(this.state.userLevel)}
      </>
    )

  }

}