import React, { Component } from 'react';

import './AddBookInput.scss';

export default class AddBookInput extends Component {
    isInputMandatory = (mandatory) => {
        const { window } = this.props;
        if (mandatory && window !== "Book info") {
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

    inputOrInfo = (window, processedBook, name, title) => {
        if (window === "Add New Books") {
            return <input className={ `input-box__input-field ${ name }_js` } placeholder={ `Enter ${title}` } name={ name } />;
        } else {
            return <div className={ "input-box__info-field" }>{processedBook[name]}</div>
        }
    };

    componentDidMount() {
        const { short, name} = this.props;
        this.setShortWidth(short, name)
    };

    render() {
        const { title, mandatory, name, processedBook, window } = this.props;
        return(
            <div className={ `input-box input-box__${ name }` }>
                <h2 className={ "input-box__title" }>
                    {title}
                    {this.isInputMandatory(mandatory, window)}
                </h2>
                {this.inputOrInfo(window, processedBook, name, title)}
            </div>
        )
    };
};
