import React, { Component } from 'react';

import HeaderRender from '../components/HeaderRender/HeaderRender.jsx';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            currentFilter: 'all-books_js'
        };
    };

    setInitialFilter = () => {
        const initialFilter = document.querySelector(`.${this.state.currentFilter}`);
        this.makeButtonPressed(initialFilter);
    };

    changeFilter = (event) => {
        const prevFilter = document.querySelector(`.${this.state.currentFilter}`);
        this.makeButtonUnpressed(prevFilter);
        const currentFilter = event.target;
        this.makeButtonPressed(currentFilter);
        this.state.currentFilter = currentFilter.classList[1];
        this.props.applyFilter(currentFilter.innerText);
    };

    makeButtonPressed = (button) => {
        button.classList.add('book-filter__button_focus');
        button.disabled = true;
    };

    makeButtonUnpressed = (button) => {
        button.classList.remove('book-filter__button_focus');
        button.disabled = false;
    };

    search = (event) => {
        const searchText = event.target.value;
        this.props.applySearch(searchText);
    };

    shouldComponentUpdate() {
        return false;
    };

    componentDidMount() {
        this.setInitialFilter();
    };

    render() {
        return(<HeaderRender changeFilter={ this.changeFilter } search={ this.search } />)
    };
};
