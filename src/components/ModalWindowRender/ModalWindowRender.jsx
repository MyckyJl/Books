import React, { Component } from 'react';

import AddBookWindow from '../../containers/AddBookWindow.jsx';
import CongratulationsWindow from '../../components/CongratulationsWindow/CongratulationsWindow.jsx';

import './ModalWindowRender.scss';

export default class ModalWindowRender extends Component {
    whichWindowShouldRender = () => {
        const { window, removeModalWindow, addBook, resetModalWindow, processedBook } = this.props;
        switch (window) {
            case "Add New Books":
                return <AddBookWindow removeModalWindow={ removeModalWindow } addBook={ addBook }
                                      resetModalWindow={ resetModalWindow } window={ window }
                                      processedBook={ processedBook } />;
            case "Congratulations":
                return <CongratulationsWindow removeModalWindow={ removeModalWindow } resetModalWindow={ resetModalWindow }
                                              processedBook ={ processedBook } />;
            case "Book info":
                return <AddBookWindow removeModalWindow={ removeModalWindow } addBook={ addBook }
                                      resetModalWindow={ resetModalWindow } window={ window }
                                      processedBook={ processedBook } />;
            default:
                break;
        }
    };

    render() {
        return(
            <div className={ "modal-window modal-window_js" }>
                {this.whichWindowShouldRender()}
            </div>
        )
    };
};
