import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';

class ProductList extends Component {
    render() {
        return (
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">{this.props.title}</span></h2>
                <div className="row px-xl-5">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                   

                </div>
            </div>
        );
    }
}

ProductList.propTypes = {

};

export default ProductList;