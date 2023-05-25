import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartProduct extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
          count: 1
        };
    }

    countHandler = event => {
        event.preventDefault();

        if(event.target.value>999){
            event.target.value =999;
        }

        if(event.target.value<1 || isNaN(event.target.value)){
            event.target.value =1;
        }
        this.setState({count: event.target.value}, this.props.updater());
    }

    addCount(){
        if((Number)(this.state.count)===999){
            return;
        }
        document.getElementById(`cart-count-${this.props.idKey}`).value =(Number)(this.state.count)+1; 
        this.setState({count: (Number)(this.state.count)+1}, this.props.updater());
    }

    removeCount() {
        if ((Number)(this.state.count) === 1) {
            return;
        } 
        document.getElementById(`cart-count-${this.props.idKey}`).value = (Number)(this.state.count) - 1;
        this.setState({ count: this.state.count - 1 }, this.props.updater());
    }

    removeFromCart(){
        
        this.props.remover(this.props.index);
    }
    
    render() {
        return (
            <tr>

                <td className="align-middle"><img src={this.props.item.image} alt="" style={{ width: '50px' }} /> {this.props.item.name}</td>
                <td className="align-middle">${this.props.item.price}</td>
                <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                        <div className="input-group-btn">
                            <button onClick={this.removeCount.bind(this)} className="btn btn-sm btn-primary btn-minus">
                                <i className="fa fa-minus" />
                            </button>
                        </div>
                        <input onChange={this.countHandler.bind(this)} id={`cart-count-${this.props.idKey}`} type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value={this.state.count} />
                        <div className="input-group-btn">
                            <button onClick={this.addCount.bind(this)} className="btn btn-sm btn-primary btn-plus">
                                <i className="fa fa-plus" />
                            </button>
                        </div>
                    </div>
                </td>
                <td className="align-middle">${this.props.item.price*this.state.count}</td>
                <td className="align-middle"><button onClick={this.removeFromCart.bind(this)} className="btn btn-sm btn-danger"><i className="fa fa-times" /></button></td>
            </tr>
        );
    }
}

CartProduct.propTypes = {

};

export default CartProduct;