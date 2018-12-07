import React, { Component } from 'react';

import './BookItemRender.scss';

export default class BookItemRender extends Component {

    openBookWindowWrapper = () => {
        const { book, openBookWindow } = this.props;
        openBookWindow(book);
    };

    render() {
        const { book, starsArr } = this.props;
        const { posterSrc, bookTitle, authorName } = book;
        return(
            <div className={ "book-item" }>
                <img src={ posterSrc } className={ "book-item__poster" } onClick={ this.openBookWindowWrapper } />
                <div className={ "book-item__meta meta" } onClick={ this.openBookWindowWrapper } >
                    <div className={ "meta__info" }>
                        <h2 className={ "meta__book-title" }>{ bookTitle }</h2>
                        <span className={ "meta__author-name" }>by { authorName }</span>
                    </div>
                    <div className={"meta__stars-box"}>
                        { starsArr }
                    </div>
                </div>
            </div>
        )
    };
};
