import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }

    loginFunc() {
        axios({
            method: 'post',
            url: `https://localhost:7020/api/Auth/Login/login?UserName=${this.state.login}&Password=${this.state.password}`,
        }).then(function (response) {
            alert('Добро пожаловать');
            console.log(response.data);
            sessionStorage.setItem("token", response.data.token);
            sessionStorage.setItem("username", response.data.userName);
        });
    }

    changeState = event => {
        if(event.target.id==="login-form__login"){
            this.setState({ login: event.target.value });
        }else{
            this.setState({ password: event.target.value });
        }
        
    }

    render() {
        return (
            <div className={`modal ${this.props.active}`}>
                <div className='modal__content'>
                    <div className="login-page">
                        <i onClick={this.props.changeState} className="fa fa-times fa-3x crossFa" aria-hidden="true"></i>
                        <div className="form">

                            <div className="login-form">

                                <input onChange={this.changeState} type="text" id="login-form__login" placeholder="Логин" />
                                <input onChange={this.changeState} type="password" id="login-form__password" placeholder="Пароль" />
                                <button onClick={this.loginFunc.bind(this)} id="login-button">Войти</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {

};

export default Login;