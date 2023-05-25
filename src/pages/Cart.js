import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import FooterBar from '../components/FooterBar';
import CartProduct from '../components/cart/CartProduct';

class Cart extends Component {


  constructor(props) {
    super(props);
    this.state = {
      cost: new Array()
    };
  }

  updateCost = () => {
    this.setState({
      cost:
        this.props.buyItems.map((item, index) => {
          return item.price * document.getElementById(`cart-count-${index}`).value;
        })
    }, ()=>{this.props.costSetter(this.state.cost)});
  }

  removeObj = (index) => {
    this.props.buyItems.splice(index, 1);
    this.updateCost();
    document.getElementById(`cart-count-${index}`).value =1;
  }

  componentDidMount() {
    this.updateCost();
  }

  getCost() {
    let count = 0;
    for (let item of this.state.cost) {
      count += (Number)(item);
    }
    return count;
  }

  render() {
    return (
      <div>
        <TopBar />
        <NavBar buyCount={this.props.buyItems} />
        <div className="container-fluid">
          <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
              <table className="table table-light table-borderless table-hover text-center mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Товар</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Итоговая стоимость</th>
                    <th>Убрать</th>
                  </tr>
                </thead>
                <tbody className="align-middle">

                  {this.props.buyItems.map((item, index) => { return <CartProduct index={index} remover={this.removeObj} updater={this.updateCost.bind()} idKey={index} key={`cart${index}`} item={item} /> })}

                </tbody>
              </table>
            </div>
            <div className="col-lg-4">
              <div className="mb-30" >
                <div className="input-group">
                  <input type="text" className="form-control border-0 p-4" placeholder="Код купона" />
                  <div className="input-group-append">
                    <button className="btn btn-primary">Активировать купон</button>
                  </div>
                </div>
              </div>
              <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Стоимость</span></h5>
              <div className="bg-light p-30 mb-5">
                <div className="border-bottom">
                  <h6 className="mb-3">Товары</h6>

                  {this.props.buyItems.map((item, index) => { return   <div className="d-flex justify-content-between"><p>{item.name}</p><p>${this.state.cost[index]}</p></div> })}
                
                </div>
                <div className="border-bottom pb-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h6>Общая стоимость</h6>
                    <h6>${this.getCost()}</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-medium">Доставка</h6>
                    <h6 className="font-weight-medium">$10</h6>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="d-flex justify-content-between mt-2">
                    <h5>Итоговая стоимость</h5>
                    <h5>${this.getCost() + 10}</h5>
                  </div>
                  <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">Начать оплату</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBar />
      </div>
    );
  }
}

Cart.propTypes = {

};

export default Cart;