import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputBox extends Component {
    render() {
        return (
            <div className="col-md-6 form-group">
                <label>{this.props.labelText}</label>
                <input className="form-control" type="text" placeholder={this.props.placeholderText} />
            </div>
        );
    }
}

InputBox.propTypes = {

};

export default InputBox;