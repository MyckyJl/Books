import React, { Component } from 'react';

import './BookListRender.scss';

export default class BookListRender extends Component {
    render() {
        const books = this.props.books;
        return(
            <main>
                {books.map((book) => <div key={book.bookId}>
                    <img src={book.posterSrc} />
                    <br />
                    {book.bookTitle}
                    <br />
                    {book.authorName}
                </div>)}
            </main>
        )
    };
};
