import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import FooterBar from '../components/FooterBar';
import axios from 'axios';
import Product from '../components/shop/Product';
import getBaseURI from '../states';
import { Outlet } from 'react-router-dom';

class Shop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: '',
      pages: '',
      productsRaw: '',
      products: '',
      isMounted: false,
      minCost: -1,
      maxCost: -1,
      count: 9,
      page: 1,
      category: "All",
      maxPages: 1,
      sortType: 0,
      searchText: "",
      iterations: 0
    };
  }

  componentDidMount() {
    if (this.state.isMounted) {
      return
    }


    this.setState({ isMounted: true });
    axios({
      method: 'get',
      url: `${getBaseURI()}/api/Category/Get`,
    }).then(function (resp) {

      this.setState({ categories: resp.data.map(item => <option key={`categoryOption-${item.id}`} value={item.name}>{item.name}</option>) });
    }.bind(this));
    this.updateProducts();
  }

  updateAll() {
    this.setState({ iterations: this.state.iterations + 1 });
  }

  updateProducts() {
    axios({
      method: 'get',
      url: `${getBaseURI()}/api/Shop/GetWithCategory`,
    }).then(function (resp) {

      let pagestemp = new Array();


      this.setState({
        productsRaw:
          resp.data.filter(function (e) {

            let minCost = true;
            let maxCost = true;
            let Category = true;
            let Names = true;


            if (this.state.searchText !== "") {
              if (!e.name.toLowerCase().includes(this.state.searchText.toLowerCase())) {
                Names = false;
              }
            }

            if (this.state.maxCost !== -1) {
              if (this.state.maxCost < e.price) {
                minCost = false;
              }
            }

            if (this.state.minCost !== -1) {
              if (this.state.minCost > e.price) {
                minCost = false;
              }
            }

            if (this.state.category !== "All") {
              if (this.state.category !== e.categoryName) {
                Category = false;
              }
            }


            return minCost & maxCost & Category & Names;
          }.bind(this))
      }, () => {


        this.setState({
          products: this.state.productsRaw.slice(
            (this.state.page - 1) * this.state.count,
            (this.state.page - 1) * this.state.count + this.state.count).sort((a, b) => {
              switch (this.state.sortType) {
                case 1:
                  return a.name > b.name ? -1 : 1;
                case 2:
                  return a.name > b.name ? 1 : -1;
                case 3:
                  return a.price > b.price ? 1 : -1;
                case 4:
                  return a.price > b.price ? -1 : 1;
              }
            })
            .map((item, index) => { return <Product key={`product-${index}`} updater={this.updateAll.bind(this)} buyItems={this.props.buyItems} item={item} /> })
        });


        let tinyPage = this.state.productsRaw.length % this.state.count == 0 ? 0 : 1;
        this.setState({ maxPages: Math.floor(this.state.productsRaw.length / this.state.count) + tinyPage }, () => {

          if (this.state.page > this.state.maxPages) {
            this.setState({ page: 1 });
          }

          // pages controller
          pagestemp.push(<li key='page-prev' id='page-previos' onClick={this.pageHandler} className={`page-item page-previos ${this.state.page === 1 ? 'disabled' : ''}`}><p className="page-link">Предыдущая</p></li>)


          if (this.state.maxPages < 10) {
            for (let i = 1; i <= this.state.maxPages && i < 10; i++) {
              pagestemp.push(<li key={`page-${i}`} onClick={this.pageHandler} className={`page-item ${i === this.state.page ? 'active' : ''}`}><p className="page-link">{i}</p></li>);
            }
          } else {

            //  1 2 3 4 5 6 7 ... 11
            if (this.state.page <= 5) {
              for (let i = 1; i <= this.state.maxPages && i < 10; i++) {
                pagestemp.push(<li key={`page-${i}`} onClick={this.pageHandler} className={`page-item ${i === this.state.page ? 'active' : ''}`}><p className="page-link">{i}</p></li>);
              }
              pagestemp.push(<li key={`page-.`} className={`page-item`}><p className="page-link">...</p></li>);
              pagestemp.push(<li key={`page-${this.state.maxPages}`} onClick={this.pageHandler} className={`page-item ${this.state.maxPages === this.state.page ? 'active' : ''}`}><p className="page-link">{this.state.maxPages}</p></li>);
            } else {

              //  1 ... 5 6 7 8 9 10 11
              if (this.state.page >= this.state.maxPages - 5) {
                pagestemp.push(<li key={`page-1`} onClick={this.pageHandler} className={`page-item ${1 === this.state.page ? 'active' : ''}`}><p className="page-link">{1}</p></li>);
                pagestemp.push(<li key={`page-..`} className={`page-item`}><p className="page-link">...</p></li>);
                for (let i = this.state.maxPages - 9; i <= this.state.maxPages; i++) {
                  pagestemp.push(<li key={`page-${i}`} onClick={this.pageHandler} className={`page-item ${i === this.state.page ? 'active' : ''}`}><p className="page-link">{i}</p></li>);
                }
              } else {

                //  1 2 3 4 ... 5 6 7 ... 8 9 10 11
                pagestemp.push(<li key={`page-1`} onClick={this.pageHandler} className={`page-item ${1 === this.state.page ? 'active' : ''}`}><p className="page-link">{1}</p></li>);
                pagestemp.push(<li key={`page-.`} className={`page-item`}><p className="page-link">...</p></li>);
                for (let i = this.state.page - 2; i <= this.state.page + 2; i++) {
                  pagestemp.push(<li key={`page-${i}`} onClick={this.pageHandler} className={`page-item ${i === this.state.page ? 'active' : ''}`}><p className="page-link">{i}</p></li>);
                }
                pagestemp.push(<li key={`page-..`} className={`page-item`}><p className="page-link">...</p></li>);
                pagestemp.push(<li key={`page-${this.state.maxPages}`} onClick={this.pageHandler} className={`page-item ${this.state.maxPages === this.state.page ? 'active' : ''}`}><p className="page-link">{this.state.maxPages}</p></li>);
              }
            }
            // pagestemp.push(<li key={`page-${i}`} onClick={this.pageHandler} className={`page-item ${i === this.state.page ? 'active' : ''}`}><p className="page-link">{i}</p></li>);
          }


          pagestemp.push(<li key='page-next' id='page-next' onClick={this.pageHandler} className={`page-item page-next ${this.state.page === this.state.maxPages ? 'disabled' : ''}`}><p className="page-link">Следующая</p></li>);
          //


          this.setState({ pages: pagestemp });
        });
      });

    }.bind(this));
  }


  textHandler = event => {

    this.setState({ searchText: event.target.value }, () => { this.updateProducts(); });
  }

  pageHandler = event => {
    event.preventDefault();



    let curPage = event.target.innerText;
    if (curPage === 'Предыдущая') {
      if (this.state.page !== 1) {
        this.setState({ page: this.state.page - 1 }, () => { this.updateProducts(); });
        return;
      }else{
        return;
    }
    }

    if (curPage === 'Следующая') {
      if (this.state.page !== this.state.maxPages) {
        this.setState({ page: this.state.page + 1 }, () => { this.updateProducts(); });
        return;
      }else{
        return;
    }
    }

    if (curPage === this.state.page || curPage < 1 || curPage > this.state.maxPages || curPage === this.state.page) {
      return;
    }
    this.setState({ page: (Number)(curPage) }, () => { this.updateProducts(); });

  }

  checkForNull() {
    if (this.state.minCost == '') {
      this.setState({minCost: -1});
    }
    
    if (this.state.maxCost == '') {
      this.setState({maxCost: -1});
    }

  }

  countHandler = event => {
    let value = event.target.innerText;
    if (value < 0 || value > 30) {
      return;
    }

    this.setState({ count: (Number)(value) }, () => { this.updateProducts(); });
  }

  sortHandler = event => {
    let value = event.target.id;
    if (value < 0 || value > 4) {
      return;
    }

    this.setState({ sortType: (Number)(value) }, () => { this.updateProducts(); });
  }

  categoriesHandler = event => {
    this.setState({ category: event.target.value }, () => { this.updateProducts(); });
  }

  costHandler = event => {
    let value = event.target.value;
    if (value > 100000) {
      event.target.value = 100000;
    }
   
    if (value < 0) {
      event.target.value = 0;
    }

    if (event.target.id === 'min-cost-bar') {
     
      if (this.state.maxCost != -1) {
        if (value > this.state.maxCost) {
          event.target.value = this.state.maxCost;
        }
      }
      this.setState({ minCost: (Number)(event.target.value) }, () => { 
        this.checkForNull();
        this.updateProducts(); 
      });
      
      return;
    }

    if (event.target.id === 'max-cost-bar') {
      
      if (this.state.minCost !== -1) {
        if (value < this.state.minCost) {
          event.target.value = this.state.minCost;
        }
      }
      this.setState({ maxCost: (Number)(event.target.value) }, () => { 
        this.checkForNull();
        this.updateProducts(); 
      });
      return;
    }
    this.updateProducts();
  };

  render() {
    return (
      <div>
        <TopBar />
        <NavBar buyCount={this.props.buyItems} />

        <div className="container-fluid pt-5 pb-3">
          <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4" id="shop-start"><span className="bg-secondary pr-3">Товары</span></h2>
          {/* Shop Start */}
          <div className="container-fluid">
            <div className="row px-xl-5">
              {/* Shop Sidebar Start */}
              <div className="col-lg-3 col-md-4">

                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Фильтры</span></h5>
                <div className="bg-light p-4 mb-30 ">
                  <form action="">
                    <div className="input-group form-group">
                      <input onChange={this.textHandler} type="text" className="form-control" placeholder="Введите название" />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </form>
                  <form>
                    <input onChange={this.costHandler} type="number" className="form-control form-group" id="min-cost-bar" placeholder="Минимальная цена" />
                    <input onChange={this.costHandler} type="number" className="form-control form-group" id="max-cost-bar" placeholder="Максимальная цена" />
                    <select onChange={this.categoriesHandler} placeholder='Категория' className='custom-select'>
                      <option defaultValue disabled>Выберите категорию</option>
                      <option value="All" >All</option>

                      {this.state.categories}
                    </select>
                  </form>
                </div>

              </div>
              {/* <div className="col-lg-3 col-md-4">

                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Фильтры</span></h5>
                <div className="bg-light p-4 mb-30">
                
                </div>

              </div> */}



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
                            <a onClick={this.countHandler} className="dropdown-item" href="#">3</a>
                            <a onClick={this.countHandler} className="dropdown-item" href="#">6</a>
                            <a onClick={this.countHandler} className="dropdown-item" href="#">9</a>
                            <a onClick={this.countHandler} className="dropdown-item" href="#">12</a>
                            <a onClick={this.countHandler} className="dropdown-item" href="#">15</a>
                          </div>
                        </div>
                        <div className="btn-group ml-2">
                          <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Сортировка</button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a onClick={this.sortHandler} id={2} className="dropdown-item" href="#">По названию A-Z</a>
                            <a onClick={this.sortHandler} id={1} className="dropdown-item" href="#">По названию Z-A</a>
                            <a onClick={this.sortHandler} id={3} className="dropdown-item" href="#">По цене ↑</a>
                            <a onClick={this.sortHandler} id={4} className="dropdown-item" href="#">По цене ↓</a>
                            <a onClick={this.sortHandler} id={0} className="dropdown-item" href="#">Без сортировки</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row pb-3 shop-container">
                    {this.state.products}
                  </div>
                  <div className="col-12">
                    <nav>
                      <ul className="pagination justify-content-center pagination-container">

                        {this.state.pages}

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