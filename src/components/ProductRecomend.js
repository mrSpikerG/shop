import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductRecomend extends Component {


    constructor(props) {
        super(props);
    }

    addToBuyed(){
        this.props.buyItems.push(this.props.item);
        this.props.updater();
    }

    render() {
        return (
            <div className="col-lg-3 col-md-6 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={this.props.item.image} onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "https://phoneshopbucket.s3.eu-west-2.amazonaws.com/74eb151d-de05-4d69-b3b5-3162bf57a8f1.png	";
                        }} 
                        alt="" />
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" onClick={this.addToBuyed.bind(this)} ><i className="fa fa-shopping-cart" /></a>
                            <a className="btn btn-outline-dark btn-square" ><i className="far fa-heart" /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none product-item-text" >{this.props.item.name}</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>${this.props.item.price}</h5>
                            <h6 className="text-muted ml-2">
                                <del>${this.props.item.price+5}</del>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default ProductRecomend;