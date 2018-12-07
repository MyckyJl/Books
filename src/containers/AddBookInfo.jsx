import React, { Component } from 'react';

import AddBookInfoRender from '../components/AddBookInfoRender/AddBookInfoRender.jsx';

export default class AddBookInfo extends Component {
    changeTab = (tab) => {
        const generalField = document.querySelector(".tab_general_js");
        const genreField = document.querySelector(".tab_genre_js");
        const generalTab = document.querySelector(".side-list__item_general");
        const genreTab = document.querySelector(".side-list__item_genre");
        switch(tab) {
            case ('General'):
                generalField.classList.remove("hidden-tab");
                genreField.classList.add("hidden-tab");
                generalTab.classList.add("side-list__item_active");
                genreTab.classList.remove("side-list__item_active");
                break;
            case ('Genre'):
                genreField.classList.remove("hidden-tab");
                generalField.classList.add("hidden-tab");
                genreTab.classList.add("side-list__item_active");
                generalTab.classList.remove("side-list__item_active");
                break;
        }
    };

    componentWillReceiveProps(nextProps) {
        this.changeTab(nextProps.tab);
    };

    componentDidMount() {
        const generalTab = document.querySelector(".side-list__item_general");
        const genreField = document.querySelector(".tab_genre_js");
        generalTab.classList.add("side-list__item_active");
        genreField.classList.add("hidden-tab");
    };

    render() {
        const { tab, window, processedBook } = this.props;
        return(
            <AddBookInfoRender tab={ tab } window={ window } processedBook={ processedBook } />
        )
    };
};
