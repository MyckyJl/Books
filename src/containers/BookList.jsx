import React, { Component } from 'react';

import BookListRender from '../components/BookListRender/BookListRender.jsx';

import { standardBooks } from '../../data/books.js';

export default class BookList extends Component {

    constructor() {
        super();
        this.state = {
            books: []
        };
    };

    areBooksUploaded = () => {
        let mode;
        if (localStorage.getItem('loglevel:webpack-dev-server')) {
            mode = 1;
        } else {
            mode = 0;
        }
        if (!localStorage.getItem('0')) {
            this.uploadStandardBooks();
        }
        this.updateState(mode);
    };

    uploadStandardBooks = () => {
        standardBooks.forEach((book, number) => {
            localStorage.setItem(`${number}`, JSON.stringify(book));
        });
    };

    updateState = (mode) => {
        let receivedBooks =[];
        for (let i = 0; i < localStorage.length - mode; i++) {
            const book = JSON.parse(localStorage.getItem(`${i}`));
            receivedBooks.push(book);
        }
        this.setState({
            books: receivedBooks
        });
    };

    componentDidMount() {
        this.areBooksUploaded();
    };

    render() {
        return(<BookListRender books={ this.state.books } />)
    };
};
