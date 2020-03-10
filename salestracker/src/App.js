import React from 'react';
// import logo from './logo.svg';
import './App.css';

// IMPORT PAGES FOR ROUTING
import AddSale from './Pages/AddSale';

//IMPORT COMPONENTS
// import FormControlCard from './Components/FormControlCard';
import ToastMessage from './Components/ToastMessages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
      toastMessage: null,
      userData: []
    }

    this.toastMessage = this.toastMessage.bind(this);

  }


  callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
  }

  pushDataAPI(type, data) {
    const domainURL = 'http://localhost:9000';
    const pathURL = type;
    let params, user;

    const options = {
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }

    if (this.state.userData.length() !== 0) {
      user = {
        companyId: this.state.userData.companyId,
        locationId: this.state.userData.locationId,
        userId: this.state.userData.userId,
      }
    }

    switch (type) {
      case 'newSale':
        // DEFINE PARAMS TO PASS TO API
        // BUNDLE JSON OBJECT TO PASS IF CHANGES ARE NEEDED
        // https://dev.to/attacomsian/introduction-to-javascript-fetch-api-4f4c
        fetch(domainURL + pathURL + params, options)
          // ******************* SET UP REST MESSAGE FILE WITH CUSTOM MESSAGES
          .then(res => res.json())
          .then(res => console.log(res))
          // this.setState({ toastMessage: res});
          .catch(err => {
            console.log('[ERROR] ', err);
            this.setState({ toastMessage: `${err.statusCode} Error: ${err.statusMessage}` });
          });

      default:
        break;
    }
  }

  componentWillMount() {
    this.callAPI();
  }

  renderToastMessage() {
    console.log('Sending Toasty Message');
    const toastMessage = { ...this.state.toastMessage };

    this.setState({ toastMessage: null });
    return (
      <ToastMessage
        statusCode={toastMessage.statusCode}
        statusMessage={toastMessage.statusMessage}
        statusType={toastMessage.statusType}
      />
    )
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
        {this.state.toastMessage !== null && this.state.toastMessage !== '' && Object.keys(this.state.toastMessage).length > 0 ? 
          this.renderToastMessage : null
        }
      </div>
    );
  }
}

export default App;