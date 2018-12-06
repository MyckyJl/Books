import React, { Component } from 'react';

import ModalWindowRender from '../components/ModalWindowRender/ModalWindowRender.jsx';

export default class ModalWindow extends Component {
    constructor() {
        super();
        this.state = {
            windowToRender: "Add a book",
            addedBook: ""
        };
    };

    checkRender = () => {
        const { renderStatus, removeModalWindow, addBook } = this.props;
        const { windowToRender, addedBook } = this.state;
        if (renderStatus) {
            return <ModalWindowRender window={ windowToRender } removeModalWindow={ removeModalWindow }
                                      addBook={ addBook } changeWindowToRender={ this.changeWindowToRender } addedBook={ addedBook }/>
        }
        return null;
    };

    changeWindowToRender = (window, book) => {
        this.setState({
            windowToRender: window,
            addedBook: book
        })
    };

    render() {
        return(
            this.checkRender()
        )
    };
};
