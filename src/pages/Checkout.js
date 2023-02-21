import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import FooterBar from '../components/FooterBar';

import BillingForm from '../components/checkout/BillingForm';
class Checkout extends Component {
    render() {
        return (<div>
            <TopBar />

            <NavBar />
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <BillingForm  title='Адрес покупки' />
                        <div className="collapse mb-5" id="shipping-address">
                            <BillingForm additionalElem={null} title='Адрес доставки' />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Ваш заказ</span></h5>
                        <div className="bg-light p-30 mb-5">
                            <div className="border-bottom">
                                <h6 className="mb-3">Products</h6>
                                <div className="d-flex justify-content-between">
                                    <p>Product Name 1</p>
                                    <p>$150</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Product Name 2</p>
                                    <p>$150</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Product Name 3</p>
                                    <p>$150</p>
                                </div>
                            </div>
                            <div className="border-bottom pt-3 pb-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>Общая стоимость</h6>
                                    <h6>$150</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Доставка</h6>
                                    <h6 className="font-weight-medium">$10</h6>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5>Итоговая стоимость</h5>
                                    <h5>$160</h5>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Оплата</span></h5>
                            <div className="bg-light p-30">
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name="payment" id="paypal" />
                                        <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name="payment" id="directcheck" />
                                        <label className="custom-control-label" htmlFor="directcheck">Direct Check</label>
                                    </div>
                                </div>
                                <div className="form-group mb-4">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
                                        <label className="custom-control-label" htmlFor="banktransfer">Bank Transfer</label>
                                    </div>
                                </div>
                                <button className="btn btn-block btn-primary font-weight-bold py-3">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBar />
        </div>
        );
    }
}

Checkout.propTypes = {

};

export default Checkout;
