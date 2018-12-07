import React, { Component } from 'react';

import ModalWindowRender from '../components/ModalWindowRender/ModalWindowRender.jsx';

export default class ModalWindow extends Component {

    checkRender = () => {
        const { renderStatus, removeModalWindow, addBook, processedBook, resetModalWindow, window } = this.props;
        if (renderStatus) {
            return <ModalWindowRender window={ window } removeModalWindow={ removeModalWindow }
                                      addBook={ addBook } resetModalWindow={ resetModalWindow }
                                      processedBook={ processedBook }/>
        }
        return null;
    };

    render() {
        return(
            this.checkRender()
        )
    };
};
