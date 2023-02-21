import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import FooterBar from '../components/FooterBar';

class Shop extends Component {
    render() {
        return (
            <div>
               <TopBar />
               <NavBar />

               <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4" id="shop-start"><span className="bg-secondary pr-3">Товары</span></h2>
        {/* Shop Start */}
        <div className="container-fluid">
          <div className="row px-xl-5">
            {/* Shop Sidebar Start */}
            <div className="col-lg-3 col-md-4">
              {/* Price Start */}
              <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Фильтр по цене</span></h5>
              <div className="bg-light p-4 mb-30">
                <form>
                  <input type="number" className="form-control form-group" id="min-cost-bar" placeholder="Минимальная цена" />
                  <input type="number" className="form-control" id="max-cost-bar" placeholder="Максимальная цена" />
                  {/* <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input cost-checkbox" checked id="price-all">
                            <label class="custom-control-label" for="price-all">Все цены</label>
                            <span class="badge border font-weight-normal">1000</span>
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input cost-checkbox" id="price-1">
                            <label class="custom-control-label" for="price-1">$0 - $100</label>
                            <span class="badge border font-weight-normal">150</span>
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input cost-checkbox" id="price-2">
                            <label class="custom-control-label" for="price-2">$100 - $200</label>
                            <span class="badge border font-weight-normal">295</span>
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input cost-checkbox" id="price-3">
                            <label class="custom-control-label" for="price-3">$200 - $300</label>
                            <span class="badge border font-weight-normal">246</span>
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input cost-checkbox" id="price-4">
                            <label class="custom-control-label" for="price-4">$300 - $400</label>
                            <span class="badge border font-weight-normal">145</span>
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" class="custom-control-input cost-checkbox" id="price-5">
                            <label class="custom-control-label" for="price-5">$400 - $500</label>
                            <span class="badge border font-weight-normal">168</span>
                        </div> */}
                </form>
              </div>
              {/* Price End */}
            </div>
            {/* Shop Sidebar End */}
            {/* Shop Product Start */}
            <div className="col-lg-9 col-md-8">
              <div className="row pb-3">
                <div className="col-12 pb-1">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div>
                      <button className="btn btn-sm btn-light"><i className="fa fa-th-large" /></button>
                      {/* <button class="btn btn-sm btn-light ml-2"><i class="fa fa-bars"></i></button> */}
                    </div>
                    <div className="ml-2">
                      <div className="btn-group ml-2">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Количество товаров</button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">3</a>
                          <a className="dropdown-item" href="#">6</a>
                          <a className="dropdown-item" href="#">9</a>
                          <a className="dropdown-item" href="#">12</a>
                          <a className="dropdown-item" href="#">15</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pb-3 shop-container">
                </div>
                <div className="col-12">
                  <nav>
                    <ul className="pagination justify-content-center pagination-container">
                      <li className="page-item page-previos disabled"><p className="page-link"> Previous</p></li>
                      <li className="page-item active"><p className="page-link">1</p></li>
                      <li className="page-item"><p className="page-link">2</p></li>
                      <li className="page-item"><p className="page-link">3</p></li>
                      <li className="page-item page-next"><p className="page-link">Next</p></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div></div></div>

               <FooterBar /> 
            </div>
        );
    }
}

Shop.propTypes = {

};

export default Shop;