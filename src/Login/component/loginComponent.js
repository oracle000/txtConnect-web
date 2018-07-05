import React from 'react';
import Radium, {StyleRoot} from 'radium';

// material-ui
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import PhoneLinkRing from 'material-ui/svg-icons/communication/phonelink-ring';

const styles = {
    titleContainer : {
        display: 'flex',
        alignItems: 'center',

        text: {
            color: '#999',
            fontSize: '20px',
            marginLeft: '10px',
            fontWeight: 400            
        }
    },

    fieldContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    textFieldContainer: {
        padding: '0 10px',
        margin: '5px 0',        
        backgroundColor: 'rgba(54, 58, 69, .2)',
        borderRadius: '5px',
        
        inputStyle : {
            color: '#eee',
            fontSize: '12px'
        },
        hintStyle : {
            color: '#999'
        },
        floatingLabelStyle: {
            color: '#999',
            fontSize: '12px'
        }
    },
    hrStyle : {
        borderColor: 'rgba(255,255,255,0.2)',        
        borderWidth: '.5px'
    },
    loginContainer: {
        display: 'flex',
        marginTop: '20px',
        justifyContent: 'flex-start'
    }
}

Radium
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clientId : '',            
            clientPass : '',
            username : '',
            password : '',
            clientIdCheck : false,
            clientPassCheck : false,
            usernameCheck : false,
            passwordCheck : false,
        }
    }


    changeClientId = (event) => {
        this.setState({
            clientId: event.target.value,
          });
    }

    changeClientpass = (event) => {
        this.setState({
            clientPass: event.target.value,
          });
    }

    changeUsername = (event) => {
        this.setState({
            username: event.target.value,
          });
    }

    changePassword = (event) => {
        this.setState({
            password: event.target.value,
          });
    }



    onLogin() {        
        if (this.state.clientId.length < 1) {
            this.setState({clientIdCheck : true});            
        } else {
            this.setState({clientIdCheck : false});            
        }

        if (this.state.clientPass.length < 1) {
            this.setState({clientPassCheck : true});            
        } else {
            this.setState({clientPassCheck : false});            
        }

        if (this.state.username.length < 1) {
            this.setState({usernameCheck : true});            
        } else {
            this.setState({usernameCheck : false});            
        }

        if (this.state.password.length < 1) {
            this.setState({passwordCheck : true});            
        } else {
            this.setState({passwordCheck : false});            
        }


        
    }

    render() {
        return (
            <StyleRoot>
                <div style={styles.titleContainer}>  
                    <PhoneLinkRing  color={'#999'}/>
                    <p style={styles.titleContainer.text}>TxtConnect</p>
                    
                </div>
                <div style={styles.fieldContainer}>                    
                    <div style={{marginLeft: '5px'}}>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                hintText="UserName"
                                floatingLabelText="Enter UserName"
                                errorText={this.state.usernameCheck ? 'This field is Required' : ''}
                                inputStyle={styles.textFieldContainer.inputStyle}
                                hintStyle={styles.textFieldContainer.hintStyle}
                                floatingLabelStyle={styles.textFieldContainer.floatingLabelStyle}
                                onChange={this.changeUsername}
                            />
                        </div>
                        <div style={styles.textFieldContainer}>
                            <TextField
                                hintText="Password"
                                floatingLabelText="Enter Password"
                                type="password"
                                errorText={this.state.passwordCheck ? 'This field is Required' : ''}
                                inputStyle={styles.textFieldContainer.inputStyle}
                                hintStyle={styles.textFieldContainer.hintStyle}
                                floatingLabelStyle={styles.textFieldContainer.floatingLabelStyle}
                                onChange={this.changePassword}
                            />
                        </div>
                    </div>            
                </div>
                    <hr style={styles.hrStyle}/>
                <div style={styles.loginContainer} >
                    
                    <FlatButton 
                        label="Login"                        
                        secondary={true} 
                        onClick={this.onLogin.bind(this)}/>
                    
                </div>
                
            </StyleRoot>
        )
    }
}

export default LoginComponent