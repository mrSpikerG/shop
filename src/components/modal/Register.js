import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Register extends Component {


    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            email: ''
        };
    }

    regFunc() {
        axios({
            method: 'post',
            url: `https://localhost:7020/api/Auth/RegUser/regUser?UserName=${this.state.login}&Password=${this.state.password}&Email=${this.state.email}`,
        }).then(function (response) {
            alert('Добро пожаловать');
            sessionStorage.setItem("token", response.data.token);
            sessionStorage.setItem("username", response.data.userName);
        });
    }

    changeState = event => {
        if(event.target.id==="reg-form__login"){
            this.setState({ login: event.target.value });
            return;
        }
        if(event.target.id==="reg-form__password"){
            this.setState({ password: event.target.value });
            return
        }
        if(event.target.id==="reg-form__email"){
            this.setState({ email: event.target.value });
            return
        }
        
    }

    render() {
        return (
            <div className={`modal ${this.props.active}`}>
                <div className='modal__content'>
                    <div className="login-page">
                        <i onClick={this.props.changeState} className="fa fa-times fa-3x crossFa" aria-hidden="true"></i>
                        <div className="form">

                            <div className="register-form">

                                <input onChange={this.changeState} type="text" id="reg-form__login" placeholder="Логин" />
                                <input onChange={this.changeState} type="password" id="reg-form__password" placeholder="Пароль" />
                                <input onChange={this.changeState} type="text" id="reg-form__email" placeholder="Почта" />
                                <button onClick={this.regFunc.bind(this)} id="reg-button">Зарегестрироваться</button>
                                <p onClick={()=>{this.props.changeState();this.props.changeLoginState()}}  className="message">Уже зарегестрированы? Войти</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {

};

export default Register;