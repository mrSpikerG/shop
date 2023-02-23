import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import FooterBar from '../components/FooterBar';
import axios from 'axios';
import Product from '../components/shop/Product';

class Shop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: '',
      pages: '',
      products: '',
      isMounted: false,
      minCost: -1,
      maxCost: -1,
      count: 9,
      page: 1,
      category: 1,
      maxPages: 1
    };
  }

  componentDidMount() {
    if (this.state.isMounted) {
      return
    }

    this.state.isMounted = true;
    axios({
      method: 'get',
      url: `https://localhost:7020/api/Category/Get`,
    }).then(function (resp) {

      this.setState({ categories: resp.data.map(item => <option key={`categoryOption-${item.id}`} value={item.id}>{item.name}</option>) });
    }.bind(this));
    this.updateProducts();
  }

  updateProducts() {
    axios({
      method: 'get',
      url: `https://localhost:7020/api/Shop/GetPages?count=${this.state.count}&categoryId=${this.state.category}&minCost=${this.state.minCost}&maxCost=${this.state.maxCost}`,
    }).then(function (resp) {

      this.setState({ maxPages: resp.data }, () => {
       
        if (this.state.page > resp.data) {
          this.setState({ page: 1 });
        }
        let pagestemp = new Array();


        
        
        pagestemp.push(<li key='page-prev' id='page-previos' onClick={this.pageHandler} className={`page-item page-previos ${this.state.page === 1 ? 'disabled' : ''}`}><p className="page-link">Предыдущая</p></li>)
        for (let i = 1; i <= resp.data; i++) {
          pagestemp.push(<li key={`page-${i}`} onClick={this.pageHandler} className={`page-item ${i === this.state.page ? 'active' : ''}`}><p className="page-link">{i}</p></li>)
        }
        pagestemp.push(<li key='page-next' id='page-next' onClick={this.pageHandler} className={`page-item page-next ${this.state.page === this.state.maxPages ? 'disabled' : ''}`}><p className="page-link">Следующая</p></li>);

        this.setState({ pages: pagestemp })
      });
    }.bind(this));


    axios({
      method: 'get',
      url: `https://localhost:7020/api/Shop/GetByPage?page=${this.state.page}&count=${this.state.count}&categoryId=${this.state.category}&minCost=${this.state.minCost}&maxCost=${this.state.maxCost}`,
    }).then(function (resp) {
      this.setState({products: resp.data.map((item,index)=>{ return <Product key={`product-${index}`} imageSrc={item.image} prodName={item.name} price={item.price}/> })});
    }.bind(this));
}

pageHandler = event => {
  event.preventDefault();



  let curPage = event.target.innerText;
  if (curPage === 'Предыдущая') {
    if (this.state.page !== 1) {
      this.setState({ page: this.state.page - 1 }, () => { this.updateProducts(); });
      return;
    }
  }

  if (curPage === 'Следующая') {
    if (this.state.page !== this.state.maxPages) {
      this.setState({ page: this.state.page + 1 }, () => { this.updateProducts(); });
      return;
    }
  }

  if (curPage === this.state.page || curPage < 1 || curPage > this.state.maxPages || curPage === this.state.page) {
    return;
  }
  this.setState({ page: (Number)(curPage) }, () => { this.updateProducts(); });

}

checkForNull() {
  if (this.state.minCost === '') {
    this.state.minCost = -1;
  }
  if (this.state.maxCost === '') {
    this.state.maxCost = -1;
  }

}

countHandler = event => {
  let value = event.target.innerText;
  if (value < 0 || value > 30) {
    return;
  }

  this.setState({ count: value }, () => { this.updateProducts(); });

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
    this.setState({ minCost: event.target.value }, () => { this.updateProducts(); });
    this.checkForNull();
    return;
  }

  if (event.target.id === 'max-cost-bar') {
    if (this.state.minCost !== -1) {
      if (value < this.state.minCost) {
        event.target.value = this.state.minCost;
      }
    }
    this.setState({ maxCost: event.target.value }, () => { this.updateProducts(); });
    this.checkForNull();
    return;
  }
  this.updateProducts();
};

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
                  <input onChange={this.costHandler} type="number" className="form-control form-group" id="min-cost-bar" placeholder="Минимальная цена" />
                  <input onChange={this.costHandler} type="number" className="form-control form-group" id="max-cost-bar" placeholder="Максимальная цена" />
                  <select onChange={this.categoriesHandler} placeholder='Категория' className='custom-select'>
                    <option defaultValue disabled>Выберите категорию</option>
                    {/* <option value={0}>Все категории</option> */}
                    {this.state.categories}
                  </select>
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
                          <a onClick={this.countHandler} className="dropdown-item" href="#">3</a>
                          <a onClick={this.countHandler} className="dropdown-item" href="#">6</a>
                          <a onClick={this.countHandler} className="dropdown-item" href="#">9</a>
                          <a onClick={this.countHandler} className="dropdown-item" href="#">12</a>
                          <a onClick={this.countHandler} className="dropdown-item" href="#">15</a>
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