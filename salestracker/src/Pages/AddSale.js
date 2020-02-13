import React from 'react';

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

    render (userLevel) {
        switch (userLevel){

            case 'admin': 
                return (
                    // <input
                <p>PROPS: {this.state.userLevel}</p>
                    // />
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