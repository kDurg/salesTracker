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
      toastMessage: {},
      userData: []
    }

    this.renderToastMessage = this.renderToastMessage.bind(this);
  }

  componentWillMount() {
    this.getUserData();
  }

  // AFTER SUCCESSFUL LOGIN, GET USER DATA
  getUserData() {

    fetch('http://localhost:9000/login/', { method: 'GET' })
      .then(res => console.log('Login Fetch called', res))
      // .then(res => this.setState({ apiResponse: res }))
      .catch(err => { console.log('[ERROR] ', err); })
    let userData = {
      userID: '123',
      userName: 'beckydurigan',
      userFriendlyName: 'Becky Durg',
      companyID: '333',
      companyName: 'purebarre',
      companyFriendlyName: 'Pure Barre',
      companyLocation: 'broomfield',
      userLevel: 'admin'
    }
    this.setState({ userData });
  }

  pushDataAPI(type, data) {
    const domainURL = 'http://localhost:9000';
    const pathURL = type;
    let company = this.state.userData.companyName ? this.state.userData.companyName : null;
    let user = this.state.userData;

    const options = {
      body: JSON.stringify({ data, user }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }

    // console.log('this is the URL Path: ', `${domainURL}/sales/${pathURL}/${company}`, options)

    switch (type) {
      case 'newsale':
        fetch(`${domainURL}/sales/${pathURL}/${company}`, options)
          .then(res => {
            console.log('fetch made, res: ', res);

            if (res.status === 200) {
              let toastMessage = {
                statusCode: res.status,
                statusMessage: 'Successfully Saved Sale',
                statusType: 'success'
              }
              this.setState({ toastMessage });
            }
          })
          .catch(err => {
            console.log('[ERROR] ', err);
            this.setState({ toastMessage: `${err.status} Error: ${err.statusMessage}` });
          });

      default:
        break;
    }
  }

  renderToastMessage() {
    const toastMessage = { ...this.state.toastMessage };
    console.log('toast: ', toastMessage)

    // if (toastMessage !== null && toastMessage !== '') {
    //   console.log('Sending Toasty Message', this.state);

    // this.setState({ toastMessage: {} });
    return (
      <ToastMessage
        statusCode={toastMessage.statusCode}
        statusMessage={toastMessage.statusMessage}
        statusType={toastMessage.statusType}
      />
    )
    //   return
    // } else {
    //   return;
    // }
  }

  render() {
    const toastMessages = this.state.toastMessage;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Sales Tracker
        </p>
        </header>

        {this.state.userData ?
          <AddSale
            pushDataAPI={(type, data) => this.pushDataAPI(type, data)}
            userData={this.state.userData}
            userLevel='admin'
          /> : null
        }
        {Object.keys(toastMessages).length > 0 ? this.renderToastMessage() : null}

      </div>
    );
  }
}

export default App;