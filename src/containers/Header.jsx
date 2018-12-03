import React, { Component } from 'react';

import HeaderRender from '../components/HeaderRender/HeaderRender.jsx';

export default class Header extends Component {

    switchButton = (changeFilter) => {
        let currentFilter = document.querySelector('.book-filter__link_focus');
        document.querySelector('.radio_js').addEventListener('click', (event) => {
            const target = event.target;
            target.classList.add('book-filter__link_focus');
            target.disabled = true;
            currentFilter.classList.remove('book-filter__link_focus');
            currentFilter.disabled = false;
            currentFilter = target;
            changeFilter(target.innerText);
        });
    };

    componentDidMount() {
        this.switchButton(this.props.changeFilter);
    };

    render() {
        return(<HeaderRender />)
    };
};
