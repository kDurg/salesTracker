import React from 'react';
// import logo from './logo.svg';
import './App.css';

// IMPORT PAGES FOR ROUTING
import AddSale from './Pages/AddSale';
import CreationTool from './Pages/CreationTool';

//IMPORT COMPONENTS
// import FormControlCard from './Components/FormControlCard';
import ToastMessage from './Components/ToastMessages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
      currentPage: 'addSale',
      toastMessage: {},
      userData: []
    }

    this.renderCurrentPage = this.renderCurrentPage.bind(this);
    this.renderToastMessage = this.renderToastMessage.bind(this);
  }

  componentWillMount() {
    this.getUserData();
  }

  componentDidUpdate() {
    console.log('[LOG] State Updated: ', this.state)
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
      locationID: '100',
      userLevel: 'godmode'
    }
    this.setState({ userData });
  }

  getDataAPI(type, data) {
    const domainURL = 'http://localhost:9000';
    const pathURL = type;
    let company = this.state.userData.companyName ? this.state.userData.companyName : null;
    let user = this.state.userData;
    let userLevel = Object.keys(user).length > 0 ? user.userLevel : ''

    const options = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }

    // console.log('[LOG] getDataAPI in App.js: ', type, data)
    switch (type) {

      case 'creationtool':
        // console.log('[LOG] getting creation form data', data)

        if (userLevel === 'godmode') {
          // GET REQUIRED FIELDS
          fetch(`${domainURL}/creationtool/requiredfields`, options)
            .then(res=> {
              return res.json();
            })
            .then(data => {
              this.setState({creationToolData: data})
            })
            .catch(err=>{if (err) throw err});

          // GET DATA FOR DROPDOWN OPTIONS
          fetch(`${domainURL}/creationtool/requiredfieldsdata`, options)
          .then(res=> {
            return res.json();
          })
          .then(data => {
            this.setState({creationToolDropdownData: data})
          })
          .catch(err=>{if (err) throw err});

        } else {
          console.log('[ERROR]: Permissions Not Valid')
        }

    }
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

  renderCurrentPage() {
    let currentPage = this.state.currentPage;

    switch (currentPage){

      case 'addSale':
        return (
          <AddSale
            pushDataAPI={(type, data) => this.pushDataAPI(type, data)}
            userData={this.state.userData}
            userLevel='admin'
          />
        )

      case 'creationTool': 
          return (
            <CreationTool
              creationToolData = {this.state.creationToolData ? this.state.creationToolData : ''}
              creationToolDropdownData = {this.state.creationToolDropdownData ? this.state.creationToolDropdownData: ''}
              creationToolDataLoaded = {this.state.creationToolData ? true : false}
              getDataAPI={(type, data) => this.getDataAPI(type, data)}
              userData = {this.state.userData}
            />
          )

      default: break;
    }

  }

  renderToastMessage() {
    const toastMessage = { ...this.state.toastMessage };
    console.log('toast: ', toastMessage)

    return (
      <ToastMessage
        statusCode={toastMessage.statusCode}
        statusMessage={toastMessage.statusMessage}
        statusType={toastMessage.statusType}
      />
    )

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

        {this.state.userData ? this.renderCurrentPage() : null}
        {Object.keys(toastMessages).length > 0 ? this.renderToastMessage() : null}

      </div>
    );
  }
}

export default App;