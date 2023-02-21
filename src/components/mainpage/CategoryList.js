import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryList extends Component {
    render() {
        return (
            <div className="container-fluid pt-5">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Категории</span></h2>
            <div className="row px-xl-5 pb-3" id="category-container">
            </div>
          </div>
        );
    }
}

CategoryList.propTypes = {

};

export default CategoryList;