import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Login from './modal/Login';
import '../style/specific/modal.css'
import Register from './modal/Register';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginActive: '',
            registerActive: '',
            isLogged: false,
            username: ''
        };

        if (sessionStorage.getItem('token') !== null) {
            this.state.isLogged = true;
            this.state.username = sessionStorage.getItem("username");
        }
    }

    changeLoginState = () => {
        this.setState({ loginActive: this.state.loginActive === 'active' ? '' : 'active' });
    }

    LeaveFromAccount = () => {
        this.setState({ isLogged: false});
    }

    changeRegisterState = () => {
        this.setState({ registerActive: this.state.registerActive === 'active' ? '' : 'active' });
    }

    render() {
        return (

            <div className="container-fluid">
                <Login changeState={this.changeLoginState} active={this.state.loginActive} />
                <Register changeLoginState={this.changeLoginState} changeState={this.changeRegisterState} active={this.state.registerActive} />
                <div className="row bg-secondary py-1 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center h-100">
                            <a className="text-body mr-3" href="">Контакты</a>
                            <a className="text-body mr-3" href="">Помощь</a>
                            <a className="text-body mr-3" href="">FAQ</a>
                        </div>
                    </div>

                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle"
                                    data-toggle="dropdown">{this.state.isLogged ?  this.state.username:'Аккаунт'} </button>
                                <div className="dropdown-menu dropdown-menu-right">

                                    {this.state.isLogged ? <label onClick={this.LeaveFromAccount} className="dropdown-item" type="button">Выйти</label> : <div>
                                        <label onClick={this.changeLoginState} className="dropdown-item" type="button">Войти</label>
                                        <label onClick={this.changeRegisterState} className="dropdown-item" type="button">Зарегестрироваться</label>
                                    </div>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <a href="" className="btn px-0 ml-2">
                                <i className="fas fa-heart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle"
                                    style={{ paddingBottom: '2px' }}>0</span>
                            </a>
                            <a href="" className="btn px-0 ml-2">
                                <i className="fas fa-shopping-cart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle"
                                    style={{ paddingBottom: '2px' }}>0</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">

                        <Link to={'/'} className="text-decoration-none">
                            <span className="h1 text-uppercase text-primary bg-dark px-2">Phone</span>
                            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-6 text-right">
                        <p className="m-0">Онлайн покупка:</p>
                        <h5 className="m-0">+38 (067) 345 6789</h5>
                    </div>
                </div>
            </div>

        );
    }
}

TopBar.propTypes = {

};

export default TopBar;