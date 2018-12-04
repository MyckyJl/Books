import React, { Component } from 'react';

import AddBookWindowRender from '../components/AddBookWindowRender/AddBookWindowRender.jsx';

export default class AddBookWindow extends Component {
    followCancelButton = (removeModalWindow) => {
        const cancelButton = document.querySelector(".cancel-button_js");
        cancelButton.addEventListener('click', () => {
            removeModalWindow();
        })
    };

    componentDidMount() {
        this.followCancelButton(this.props.removeModalWindow);
    };

    render() {
        return(<AddBookWindowRender />)
    };
};
