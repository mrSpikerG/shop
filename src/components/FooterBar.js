import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterBar extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <h5 className="text-secondary text-uppercase mb-4">О нас:</h5>
                <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor.
                    Rebum tempor no vero est magna amet no</p>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Улица N 123, Киев, Украина</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>Tech_Support@PhoneShop.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+38 (067) 345 6789</p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">Быстрый доступ</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Товары</a>
                            <a className="text-secondary" href="#"><i className="fa fa-angle-right mr-2"></i>Контакты</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">Мой аккаунт</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Корзина</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Оплата</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h6 className="text-secondary text-uppercase mt-4 mb-3">Подпишись на нас</h6>
                        <div className="d-flex">
                            <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row border-top mx-xl-5 py-4" style={{borderColor:"rgba(256, 256, 256, .1) !important"}}>
            <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-center text-md-left text-secondary">
                    &copy; <a className="text-primary" href="#">PhoneShop.ua</a>. все права не защищены, дизайн разработан
                    добрым человеком.
                </p>
            </div>
            <div className="col-md-6 px-xl-0 text-center text-md-right">
                <img className="img-fluid" src="img/payments.png" alt="" />
            </div>
        </div>
    </div>
        );
    }
}

FooterBar.propTypes = {

};

export default FooterBar;