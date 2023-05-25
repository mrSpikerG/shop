import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Category from './Category';
import getBaseURI from '../../states';

class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryList: new Array(),
            isMounted: false,
            result: new Array()
        };

    }

    componentDidMount() {
        if (!this.state.isMounted) {
            this.state.isMounted = true;
            axios({
                method: 'get',
                url: `${getBaseURI()}/api/Category/Get`,
            }).then(function (resp) {
                for (let item of resp.data) {
                    axios({
                        method: 'get',
                        url: `${getBaseURI()}/api/Category/GetCategoryCount?id=${item.id}`,
                    }).then(function (response) {
                        if (this.state.categoryList.indexOf([item, response.data]) === -1) {
                            this.state.categoryList.push([item, response.data]);
                            this.setState({result: this.state.categoryList.map(function (item) {
                                return <Category categoryName={item[0].name} count={item[1]} image={item[0].image} />;
                            })});
                          
                        }
                    }.bind(this));
                }
            }.bind(this));
        }
    }


    render() {
        return (
            <div className="container-fluid pt-5">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Категории</span></h2>
                <div className="row px-xl-5 pb-3" id="category-container">
                    
                    {this.state.result}
                   
                </div>
            </div>
        );
    }
}

CategoryList.propTypes = {

};

export default CategoryList;