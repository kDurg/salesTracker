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