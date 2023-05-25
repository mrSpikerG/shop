import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductRecomend from '../ProductRecomend';
import getBaseURI from '../../states';
import axios from 'axios';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productsRaw: 'kk'
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: `${getBaseURI()}/api/Shop/GetLastProducts`,
        }).then(function (resp) {

            let prods = resp.data.map((item, index) => { return <ProductRecomend key={`product-${index}`} updater={""} buyItems={this.props.buyItems} item={item} />});
            this.setState({productsRaw: prods})
           

        }.bind(this));
    }
    render() {
        return (
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">{this.props.title}</span></h2>
                <div className="row px-xl-5">

                   
                {this.state.productsRaw}
             


                </div>
            </div>
        );
    }
}

ProductList.propTypes = {

};

export default ProductList;