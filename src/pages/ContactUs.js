import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import FooterBar from '../components/FooterBar';
import ContactForm from '../components/contact/ContactForm';


class ContactUs extends Component {
    render() {
        return (
            <div>
                <TopBar />
                <NavBar />

                <div className="container-fluid">
                    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Связь с нами</span></h2>
                    <div className="row px-xl-5">
                        <div className="col-lg-7 mb-5">
                           <ContactForm />
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div className="bg-light p-30 mb-30">
                                <iframe style={{ width: '100%', height: '250px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004157.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                            <div className="bg-light p-30 mb-3">
                                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3" />Улица N 123, Киев, Украина</p>
                                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3" />Tech_Support@PhoneShop.com</p>
                                <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3" />+38 (067) 345 6789</p>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterBar />
            </div>
        );
    }
}

ContactUs.propTypes = {

};

export default ContactUs;