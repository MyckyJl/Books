import React, { Component } from 'react';

import AddBookWindow from '../../containers/AddBookWindow.jsx';

import './ModalWindowRender.scss';

export default class ModalWindowRender extends Component {
    whichWindowShouldRender = (window, removeModalWindow) => {
        switch (window) {
            case "Add a book":
                return <AddBookWindow removeModalWindow={ removeModalWindow } />;
            default:
                break;
        }
    };

    render() {
        const { window, removeModalWindow } = this.props;
        return(
            <div className={ "modal-window modal-window_js" }>
                {this.whichWindowShouldRender(window, removeModalWindow)}
            </div>
        )
    };
};
