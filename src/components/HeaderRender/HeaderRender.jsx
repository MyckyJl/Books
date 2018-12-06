import React, { Component } from 'react';

import './HeaderRender.scss';

export default class Header extends Component {
    render() {
        const { changeFilter, search } = this.props;
        return(
            <header className={ "header" }>
                <h1 className={ "header__headline" }>
                    Browse Available Books
                </h1>
                <div className={ "header__book-filter book-filter" }>
                    <div className={ "book-filter__button-box" } onClick={ changeFilter } >
                        <button className={ "book-filter__button all-books_js" }>All Books</button>
                        <button className={ "book-filter__button most-recent_js" }>Most Recent</button>
                        <button className={ "book-filter__button most-popular_js" }>Most Popular</button>
                        <button className={ "book-filter__button free-books_js" }>Free Books</button>
                    </div>
                    <div className={ "book-filter__search-field search-field" }>
                        <input className={ "search-field__input" } placeholder={ "Enter Keywords" } onInput={ search }/>
                        <i className="fa fa-search search-field__loup" aria-hidden="true" />
                    </div>
                </div>
            </header>
        )
    };
};
