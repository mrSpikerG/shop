import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={this.props.imageSrc} alt="" />
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=''><i className="fa fa-shopping-cart" /></a>
                            <a className="btn btn-outline-dark btn-square" href=''><i className="far fa-heart" /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href=''>{this.props.prodName}</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>${this.props.price}</h5>
                            <h6 className="text-muted ml-2">
                                <del>${this.props.price+5}</del>
                            </h6>
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