import React, { Component } from 'react';

import './CongratulationsWindow.scss';

export default class CongratulationsWindow extends Component {
    componentDidMount() {
        document.querySelector(".congrats-window__close-button_js").addEventListener('click', () => {
            this.props.removeModalWindow();
            this.props.clearRemains();
        })
    };

    render() {
        return(
            <div className={ "congrats-window" }>
                <div className={ "congrats-window__title" }>The book successfully added!</div>
                <div className={ "congrats-window__footer" }>
                    <button className={ "congrats-window__close-button congrats-window__close-button_js" }>CLOSE</button>
                </div>
            </div>
        )
    };
};
