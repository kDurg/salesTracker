import React from 'react';
import { Col, Row, Button, Input, Table } from 'reactstrap';

// IMPORT COMPONENTS
import FormControlCard from '../Components/FormControlCard';

export default class AddSale extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
  
      // BIND THIS ACROSS FUNCTIONS
    //   this.getSummonerData = this.getSummonerData.bind(this);
    //   this.getMostRecentMatchData = this.getMostRecentMatchData.bind(this);
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    let userLevel = props.userLevel;
    }

    handleChange(data) {

    //     let player = { ...this.state.player };
    //     player.searchName = data.target.value;
    //     this.setState({ player });
    }
    
    //   handleSubmit(data) {
    
    //     data.preventDefault();
    //     this.setState({recentGameRequestFinished:false});
    //     this.getSummonerData(this.state.player.searchName);
    // }

    render (userLevel) {
        switch (userLevel){

            case 'admin': 
                return (
                    // <p>PROPS: {this.state.userLevel}</p>
                    <FormControlCard
                        onChange= {data=>this.handleChange(data)}
                        // placeholder= {props}
                        // value= {props}
                        type='textInput'
                    />
                )

            case 'manager':
                return (
                    // <input
                    <p>PROPS: {this.state.userLevel}</p>
                    // />
                )

            case 'user':
                return (
                    // <input
                    <p>PROPS: {this.state.userLevel}</p>
                    // />
                )

            default:
                return (console.log(`[ERROR]: NO USER LEVEL DEFINED`))

        }

        }

}