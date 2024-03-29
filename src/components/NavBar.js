import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class NavBar extends Component {
  
  
 
  render() {
    return (
      <div className="container-fluid bg-dark mb-30">
      
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', padding: '0 30px' }}>
              <h6 className="text-dark m-0"><i className="fa fa-bars mr-2" />В разработке</h6>
              <i className="fa fa-angle-down text-dark" />
            </a>
            <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{ width: 'calc(100% - 30px)', zIndex: 999 }}>
              <div className="navbar-nav w-100">
                <div className="nav-item dropdown dropright">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Типа список <i className="fa fa-angle-right float-right mt-1" /></a>
                  <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                    <a href="" className="dropdown-item">чета там 1</a>
                    <a href="" className="dropdown-item">чета там 2</a>
                    <a href="" className="dropdown-item">чета там 3</a>
                  </div>
                </div>
                <a href="" className="nav-item nav-link">типа раздел</a>
                <a href="" className="nav-item nav-link">типа раздел</a>
                <a href="" className="nav-item nav-link">Дальше лень заполнять поэтому мало разделов</a>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">Phone</span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
              </a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">
                  <Link to={'/shop'} className="nav-item nav-link">Товары</Link>

                  <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Страницы <i className="fa fa-angle-down mt-1" /></a>
                    <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">

                      <Link to={'/cart'} className="dropdown-item">Корзина</Link>
                      <Link to={'/checkout'} className="dropdown-item">Оплата</Link>

                    </div>
                  </div>
                  <Link to={'/contact'} className="nav-item nav-link">Контакты</Link>

                </div>
                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <a  className="btn px-0">
                    <i className="fas fa-heart text-primary" />
                    <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                  </a>
                  <a  className="btn px-0 ml-3">
                    <i className="fas fa-shopping-cart text-primary" />
                    <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>{this.props.buyCount.length}</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {

};

export default NavBar;