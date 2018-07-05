import React  from 'react';

import LoginComponent from '../component/loginComponent';

import { Query  } from "react-apollo";
import gql from "graphql-tag";


const styles = {
    loginContainer : {
        backgroundColor: '#262930',
        backgroundImage : 'url(../../Images/bgPhoto.jpg)',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems : 'center',
        justifyContent: 'center'
    }
} 





class LoginContainer extends React.Component {  
    render() {


        return (
            <div style={styles.loginContainer}>            
                <LoginComponent />
                {/* <ExchangeRates /> */}
                
            </div>
        )
    }
}

export default LoginContainer;