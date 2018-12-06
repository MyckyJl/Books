import React, { Component } from 'react';

import './AddBookInput.scss';

export default class AddBookInput extends Component {
    isInputMandatory = (mandatory) => {
        if (mandatory) {
            return <span className={ "input-box__asterisk" }>*</span>
        }
        return null;
    };

    setShortWidth = (short, name) => {
        if (short) {
            const shortInput = document.querySelector(`.input-box__${name}`);
            shortInput.classList.add("short-input");
        }
    };

    componentDidMount() {
        const { short, name } = this.props;
        this.setShortWidth(short, name)
    };

    render() {
        const { title, mandatory, name } = this.props;
        return(
            <div className={ `input-box input-box__${ name }` }>
                <h2 className={ "input-box__title" }>
                    {title}
                    {this.isInputMandatory(mandatory)}
                </h2>
                <input className={ `input-box__input-field ${ name }_js` } placeholder={ `Enter ${title}` } name={ name } />
            </div>
        )
    };
};
