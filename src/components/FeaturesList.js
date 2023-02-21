import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeaturesList extends Component {
    render() {
        return (
            <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: '30px'}}>
                  <h1 className="fa fa-check text-primary m-0 mr-3" />
                  <h5 className="font-weight-semi-bold m-0">Качественная продукция</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: '30px'}}>
                  <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
                  <h5 className="font-weight-semi-bold m-0">Бесплатная доставка</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: '30px'}}>
                  <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
                  <h5 className="font-weight-semi-bold m-0">14-дневный возврат</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: '30px'}}>
                  <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
                  <h5 className="font-weight-semi-bold m-0">24/7 поддержка</h5>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

FeaturesList.propTypes = {

};

export default FeaturesList;