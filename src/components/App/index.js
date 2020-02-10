import React, {Component} from 'react';

import 'whatwg-fetch'

import Main from '../Main'
import './App.css';



class App extends Component {
  

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'> <a className="headerLink" href="/"> TV Series List</a> </h1>
        </header>
        <Main/>

      </div>
    )
  }
}



export default App;
