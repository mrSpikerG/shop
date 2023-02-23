import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {

    

    render() {
        return (
            <div id="${item.id}" className="col-lg-3 col-md-4 col-sm-6 pb-1 category-block">
                <div className="cat-item d-flex align-items-center mb-4">
                    <div className="overflow-hidden" style={{ width: '100px', height: '100px' }}>
                        <img className="img-fluid" src={this.props.image} alt="" />
                    </div>
                    <div className="flex-fill pl-3">
                        <h6>{this.props.categoryName}</h6>
                        <small className="text-body">{this.props.count} продуктов</small>
                    </div>
                </div>
            </div>
        );
    }
}

Category.propTypes = {

};

export default Category;