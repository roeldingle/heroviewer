import React from 'react';
import './App.css';
import MainData from './data/MainData.js';

import Header from './components/Header';
import HeroViewer from './components/HeroViewer';

class App extends React.Component {

  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <HeroViewer data={MainData}/>
      </div>
    );
  }
}

export default App;
