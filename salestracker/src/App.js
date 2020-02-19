import React from 'react';
// import logo from './logo.svg';
import './App.css';

// IMPORT PAGES FOR ROUTING
import AddSale from './Pages/AddSale';

//IMPORT COMPONENTS
// import FormControlCard from './Components/FormControlCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Sales Tracker
        </p>
      </header>
        <AddSale
          userFriendlyName= 'Becky D.'
          userLevel='admin'
        />
    </div>
  );
}

export default App;