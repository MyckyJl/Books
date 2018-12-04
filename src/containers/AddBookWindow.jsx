import React, { Component } from 'react';

import AddBookWindowRender from '../components/AddBookWindowRender/AddBookWindowRender.jsx';

export default class AddBookWindow extends Component {
    followCancelButton = (removeModalWindow) => {
        const cancelButtons = document.querySelectorAll(".cancel-button_js");
        cancelButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    removeModalWindow();
                });
        });
    };

    componentDidMount() {
        this.followCancelButton(this.props.removeModalWindow);
    };

    render() {
        return(<AddBookWindowRender />)
    };
};
