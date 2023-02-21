import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Carousel extends Component {
    render() {
        return (
            <div className="col-lg-8">
        <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to={0} className="active" />
            <li data-target="#header-carousel" data-slide-to={1} />
            <li data-target="#header-carousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item position-relative active" style={{height: '430px'}}>
              <img className="position-absolute w-100 h-100" src="https://i.imgur.com/K6vpEoL.jpeg" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: '700px'}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Новейшие
                    технологии</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet
                    lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                  <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#shop-start">Купить сейчас</a>
                </div>
              </div>
            </div>
            <div className="carousel-item position-relative" style={{height: '430px'}}>
              <img className="position-absolute w-100 h-100" src="https://i.imgur.com/OfCKDpo.jpeg" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: '700px'}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                    Эксклюзивные товары</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet
                    lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                  <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#shop-start">Купить сейчас</a>
                </div>
              </div>
            </div>
            <div className="carousel-item position-relative" style={{height: '430px'}}>
              <img className="position-absolute w-100 h-100" src="https://i.imgur.com/O7EtMoR.jpeg" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: '700px'}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Быстрая
                    тех поддержка</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet
                    lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                  <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#shop-start">Купить сейчас</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

Carousel.propTypes = {

};

export default Carousel;