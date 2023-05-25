import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import FooterBar from '../components/FooterBar';
import FeaturesList from '../components/FeaturesList';
import SpecialOffer from '../components/Banners/SpecialOffer';
import Carousel from '../components/Carousel';
import CategoryList from '../components/mainpage/CategoryList';
import ProductList from '../components/mainpage/ProductList';


class HomePage extends Component {
    render() {
        return (
            <div>
                <TopBar />

                <NavBar buyCount={this.props.buyItems} />

                <div className="container-fluid mb-3">
                    <div className="row px-xl-5">
                        <Carousel />
                        <div className="col-lg-4">
                            <SpecialOffer offerType='1' />
                            <SpecialOffer offerType='2' />
                        </div>
                    </div>
                </div>
                <FeaturesList />
                <CategoryList />

                <ProductList buyItems={this.props.buyItems} title="Лучшие товары" />


                <div className="container-fluid pt-5 pb-3">
                    <div className="row px-xl-5">
                        <div className="col-md-6">
                            <SpecialOffer offerType='1' />
                        </div>
                        <div className="col-md-6">
                            <SpecialOffer offerType='2' />
                        </div>
                    </div>
                </div>

                <ProductList buyItems={this.props.buyItems} title="Последние товары" />

                <FooterBar />
            </div>
        );
    }
}



export default HomePage;