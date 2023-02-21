import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    render() {
        return (
            <div className="contact-form bg-light p-30">
            <div id="success" />
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="control-group">
                    <input type="text" className="form-control" id="name" placeholder="Ваше имя" required="required" data-validation-required-message="Please enter your name" />
                    <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                    <input type="email" className="form-control" id="email" placeholder="Ваша почта" required="required" data-validation-required-message="Please enter your email" />
                    <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                    <input type="text" className="form-control" id="subject" placeholder="Тема" required="required" data-validation-required-message="Please enter a subject" />
                    <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                    <textarea className="form-control" rows={8} id="message" placeholder="Сообщение" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                    <p className="help-block text-danger" />
                </div>
                <div>
                    <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Отправить сообщение</button>
                </div>
            </form>
        </div>
        );
    }
}

ContactForm.propTypes = {

};

export default ContactForm;