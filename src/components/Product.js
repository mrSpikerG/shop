import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src="https://i.imgur.com/EDByuF0.jpg" alt="" />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href=''><i className="fa fa-shopping-cart" /></a>
                  <a className="btn btn-outline-dark btn-square" href=''><i className="far fa-heart" /></a>
                  <a className="btn btn-outline-dark btn-square" href=''><i className="fa fa-sync-alt" /></a>
                  <a className="btn btn-outline-dark btn-square" href=''><i className="fa fa-search" /></a>
                </div>
              </div>
              <div className="text-center py-4">
                <p className="h6 text-decoration-none text-truncate">Product Name Goes Here</p>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star-half-alt text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

Product.propTypes = {

};

export default Product;