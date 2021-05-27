import React from 'react';
import { LoginForm } from './LoginForm';

import './LoginPage.css';

class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            messageError:"",
            credential:{
                login:"",
                password:""
            }
        }
    }

    handlerLoginForm = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        const credential = {
            ...this.state.credential,
            [name]:value
        }
        this.setState({ credential })
    }

    handleSign = async (event) => {
        let response = null;
        try{
            response = await fetch('/api/v1/authenticate',{
                headers:{"Content-Type":"Application/json"},
                method:"POST",
                body:JSON.stringify(this.state.credential)
            })
            if (response.status == 401){
                this.setState({messageError: "login ou senha inválido"})
            } else if(response.status === 200){
                const data = await response.json();
                this.setState({messageError: ""});
                this.props.history.push('/');
            }
        }catch(err){
            console.log(err);
        }
    }

    render(){
        return(
            <div className="login-page">
                <LoginForm 
                 messageError={this.state.messageError}
                 credential={this.state.credential}
                 onLoginForm={this.handlerLoginForm}
                 onSign={this.handleSign}
                ></LoginForm>
            </div>
        )
    }
}

export default LoginPage;