import React, { Component } from 'react';

import BookItem from '../../containers/BookItem.jsx';

import './BookListRender.scss';

export default class BookListRender extends Component {
    render() {
        const { books } = this.props;
        return(
            <main className={ "books-container" }>
                { books.map((book) => <BookItem key={ book.ISBN } book={ book } />) }
            </main>
        )
    };
};
