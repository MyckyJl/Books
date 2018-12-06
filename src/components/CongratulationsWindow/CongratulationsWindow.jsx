import React, { Component } from 'react';

import './CongratulationsWindow.scss';

export default class CongratulationsWindow extends Component {
    closeButtonAct = () => {
        const { removeModalWindow, changeWindowToRender } = this.props;
        removeModalWindow();
        changeWindowToRender("Add a book");
    };

    render() {
        const { addedBook } = this.props;
        return(
            <div className={ "congrats-window" }>
                <div className={ "congrats-window__title" }>The book "{ addedBook }" successfully added!</div>
                <div className={ "congrats-window__footer" }>
                    <button className={ "congrats-window__close-button" } onClick={ this.closeButtonAct }>CLOSE</button>
                </div>
            </div>
        )
    };
};
