import React, { Component } from 'react';

import ModalWindowRender from '../components/ModalWindowRender/ModalWindowRender.jsx';

export default class ModalWindow extends Component {
    constructor() {
        super();
        this.state = {
            windowToRender: "Add a book"
        };
    };

    checkRender = (renderStatus, removeModalWindow, addBook, changeWindowToRender) => {
        if (renderStatus) {
            return <ModalWindowRender window={ this.state.windowToRender } removeModalWindow={ removeModalWindow }
                                      addBook={ addBook } changeWindowToRender={ changeWindowToRender } clearRemains ={ this.clearRemains }/>
        }
        return null;
    };

    changeWindowToRender = (window) => {
        this.setState({
            windowToRender: window
        })
    };

    clearRemains = () => {
        this.state.windowToRender = "Add a book";
    };

    render() {
        const { renderStatus, removeModalWindow, addBook }= this.props;
        return(
            this.checkRender(renderStatus, removeModalWindow, addBook, this.changeWindowToRender)
        )
    };
};
