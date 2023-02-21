import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SpecialOffer extends Component {
    render() {
        return (
            <div className="product-offer mb-30" style={{height: '200px'}}>
            <img className="img-fluid" src={this.props.offerType==='1'?"https://i.imgur.com/ejjz6Hl.jpeg":"https://i.imgur.com/iXKU9Rx.jpeg"} alt="" />
            <div className="offer-text">
              <h6 className="text-white text-uppercase">Сохрани 20%</h6>
              <h3 className="text-white mb-3">Специальное предложение</h3>
              <a href="#shop-start" className="btn btn-primary">Купить сейчас</a>
            </div>
          </div>
        );
    }
}

SpecialOffer.propTypes = {

};

export default SpecialOffer;