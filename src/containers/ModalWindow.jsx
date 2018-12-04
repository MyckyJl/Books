import React, { Component } from 'react';

import ModalWindowRender from '../components/ModalWindowRender/ModalWindowRender.jsx';

export default class ModalWindow extends Component {
    constructor() {
        super();
        this.state = {
            windowToRender: "Add a book"
        };
    };

    checkRender = (renderStatus, removeModalWindow) => {
        if (renderStatus) {
            return <ModalWindowRender window={ this.state.windowToRender } removeModalWindow={ removeModalWindow } />
        }
        return null;
    };

    render() {
        const { renderStatus, removeModalWindow }= this.props;
        return(
            this.checkRender(renderStatus, removeModalWindow)
        )
    };
};
