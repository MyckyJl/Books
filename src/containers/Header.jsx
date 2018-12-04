import React, { Component } from 'react';

import HeaderRender from '../components/HeaderRender/HeaderRender.jsx';

export default class Header extends Component {

    setInitialFilter = (applyFilter) => {
        function makeButtonPressed(button) {
            button.classList.add('book-filter__button_focus');
            button.disabled = true;
        }

        const filterPanel = document.querySelector('.filter-panel_js');
        let currentFilter = filterPanel.firstElementChild;
        makeButtonPressed(currentFilter);

        filterPanel.addEventListener('click', (event) => {
            currentFilter.classList.remove('book-filter__button_focus');
            currentFilter.disabled = false;
            currentFilter = event.target;
            makeButtonPressed(currentFilter);
            applyFilter(currentFilter.innerText);
        });
    };

    componentDidMount() {
        this.setInitialFilter(this.props.applyFilter);
    };

    render() {
        return(<HeaderRender />)
    };
};
