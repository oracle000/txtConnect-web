import React, { Component } from 'react';



import LoginContainer from './Login/container/loginContainer';
import Radium, { StyleRoot } from 'radium';

Radium
class App extends Component {

  render() {
    

    return (
        <StyleRoot>       
            <LoginContainer/>          
      </StyleRoot>
    );
  }
}

export default App;
