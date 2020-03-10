import React from 'react';
// import logo from './logo.svg';
import './App.css';

// IMPORT PAGES FOR ROUTING
import AddSale from './Pages/AddSale';

//IMPORT COMPONENTS
// import FormControlCard from './Components/FormControlCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',

    }
  }

  callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
  }

  pushDataAPI(type, data) {
    const domainURL = 'http://localhost:9000';
    const pathURL = type;
    let params;

    switch (type) {

      case 'newSale':
        // DEFINE PARAMS TO PASS TO API
        // BUNDLE JSON OBJECT TO PASS IF CHANGES ARE NEEDED
        // https://dev.to/attacomsian/introduction-to-javascript-fetch-api-4f4c
        send(domainURL + pathURL + params)
          .then(res => {

            // ******************* SET UP REST MESSAGE FILE WITH CUSTOM MESSAGES
            if (res.type == 'sucess') {
              console.log('Successfully Rescorded Sale!')
            } else if (res.type == 'fail') {
              console.log('[ERROR] Sale Was Not Recorded: ' + res.statusCode);
            }

          })
          .catch (err => {
            console.log('[ERROR] Sale Was Not Recorded: ' + res.statusCode);
          });

      default:
        break;

    }
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Sales Tracker
        </p>
        </header>
        <h1>{this.state.apiResponse}</h1>
        <AddSale
          userFriendlyName='Becky D.'
          userLevel='admin'
        />
      </div>
    );
  }
}

export default App;