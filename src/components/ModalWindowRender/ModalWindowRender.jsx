import React, { Component } from 'react';

import AddBookWindow from '../../containers/AddBookWindow.jsx';
import CongratulationsWindow from '../../components/CongratulationsWindow/CongratulationsWindow.jsx';

import './ModalWindowRender.scss';

export default class ModalWindowRender extends Component {
    whichWindowShouldRender = () => {
        const { window, removeModalWindow, addBook, changeWindowToRender, addedBook } = this.props;
        switch (window) {
            case "Add a book":
                return <AddBookWindow removeModalWindow={ removeModalWindow } addBook={ addBook }
                                      changeWindowToRender={ changeWindowToRender } window={ window } />;
            case "Congratulations":
                return <CongratulationsWindow removeModalWindow={ removeModalWindow } changeWindowToRender={ changeWindowToRender }
                                              addedBook ={ addedBook } />;
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
