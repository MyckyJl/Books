import React, { Component } from 'react';

import SidebarRender from '../components/SidebarRender/SidebarRender.jsx';

export default class Header extends Component {

    followAddBookButton = (renderModalWindow) => {
        const addBookButton = document.querySelector('.aside__button_js');
        addBookButton.addEventListener('click', () => {
            renderModalWindow();
        })
    };

    componentDidMount() {
        this.followAddBookButton(this.props.renderModalWindow);
    };

    render() {
        return(<SidebarRender />)
    };
};
