import React, { Component } from 'react';

import './HeaderRender.scss';

export default class Header extends Component {
    render() {
        return(
            <header className={ "header" }>
                <h1 className={ "header__headline" }>
                    Browse Available Books
                </h1>
                <div className={ "header__book-filter book-filter" }>
                    <div className={ "book-filter__link-box" }>
                        <button className={ "book-filter__link book-filter__link_focus" }>All Books</button>
                        <button className={ "book-filter__link" }>Most Recent</button>
                        <button className={ "book-filter__link" }>Most Popular</button>
                        <button className={ "book-filter__link" }>Free Books</button>
                    </div>
                    <div className={ "book-filter__search-field search-field" }>
                        <input className={ "search-field__input" } placeholder={ "Enter Keywords" }/>
                        <i className="fa fa-search search-field__loup" aria-hidden="true" />
                    </div>
                </div>
            </header>
        )
    };
};
