import React, { Component } from 'react';

import BookItem from '../../containers/BookItem.jsx';

import './BookListRender.scss';

export default class BookListRender extends Component {
    render() {
        const { books, openBookWindow } = this.props;
        return(
            <main className={ "books-container" }>
                { books.map((book, i) => <BookItem key={ i } book={ book } openBookWindow={ openBookWindow } />) }
            </main>
        )
    };
};
