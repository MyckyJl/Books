import React, { Component } from 'react';

import AddBookWindow from '../../containers/AddBookWindow.jsx';
import CongratulationsWindow from '../../components/CongratulationsWindow/CongratulationsWindow.jsx';

import './ModalWindowRender.scss';

export default class ModalWindowRender extends Component {
    whichWindowShouldRender = (window, removeModalWindow, addBook, changeWindowToRender, clearRemains) => {
        switch (window) {
            case "Add a book":
                return <AddBookWindow removeModalWindow={ removeModalWindow } addBook={ addBook }
                                      changeWindowToRender={ changeWindowToRender } />;
            case "Congratulations":
                return <CongratulationsWindow removeModalWindow={ removeModalWindow } clearRemains={ clearRemains }/>;
            default:
                break;
        }
    };

    render() {
        const { window, removeModalWindow, addBook, changeWindowToRender, clearRemains } = this.props;
        return(
            <div className={ "modal-window modal-window_js" }>
                {this.whichWindowShouldRender(window, removeModalWindow, addBook, changeWindowToRender, clearRemains)}
            </div>
        )
    };
};
