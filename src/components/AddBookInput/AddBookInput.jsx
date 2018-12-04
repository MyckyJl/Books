import React, { Component } from 'react';

import './AddBookInput.scss';

export default class AddBookInput extends Component {
    isInputMandatory = (mandatory) => {
        if (mandatory) {
            return <span className={ "input-box__asterisk" }>*</span>
        }
        return null;
    };

    calculateWidth = (short) => {
        if (short) {
            return {width: '220px'}
        }
        return null;
    };

    render() {
        const {title, mandatory, short} = this.props;
        return(
            <div className={ "input-box" } style={this.calculateWidth(short)}>
                <h2 className={ "input-box__title" }>
                    {title}
                    {this.isInputMandatory(mandatory)}
                </h2>
                <input className={ "input-box__input-field" } placeholder={`Enter ${title}`} />
            </div>
        )
    };
};
