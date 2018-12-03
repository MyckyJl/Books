import React, { Component } from 'react';

import BookListRender from '../components/BookListRender/BookListRender.jsx';

import { standardBooks } from '../../data/books.js';

export default class BookList extends Component {

    constructor() {
        super();
        this.state = {
            mode: 1,
            books: []
        };
    };

    initialFunction = (filter) => {
        if (localStorage.getItem('loglevel:webpack-dev-server')) {
            this.state.mode = 1;
        } else {
            this.state.mode = 0;
        }
        if (!localStorage.getItem('0')) {
            this.uploadStandardBooks();
        }
        this.applyFilter(filter, this.state.mode);
    };

    uploadStandardBooks = () => {
        standardBooks.forEach((book, number) => {
            localStorage.setItem(`${number}`, JSON.stringify(book));
        });
    };

    applyFilter = (newFilter, mode) => {
        switch(newFilter) {
            case 'All Books':
                this.displayAllBooks(mode);
                break;
            case 'Most Recent':
                this.displayRecentBooks(mode);
                break;
            case 'Most Popular':
                this.displayPopularBooks(mode);
                break;
            case 'Free Books':
                this.displayFreeBooks(mode);
                break;
            default:
                break;
        }
    };

    displayAllBooks = (mode) => {
        let receivedBooks =[];
        for (let i = 0; i < localStorage.length - mode; i++) {
            const book = JSON.parse(localStorage.getItem(`${i}`));
            receivedBooks.push(book);
        }
        this.setState({
            books: receivedBooks
        });
    };

    displayRecentBooks = (mode) => {
        let receivedBooks =[];
        for (let i = 0; i < localStorage.length - mode; i++) {
            const book = JSON.parse(localStorage.getItem(`${i}`));
            if (book.recent) {
                receivedBooks.push(book);
            }
        }
        this.setState({
            books: receivedBooks
        });
    };

    displayPopularBooks = (mode) => {
        let receivedBooks =[];
        for (let i = 0; i < localStorage.length - mode; i++) {
            const book = JSON.parse(localStorage.getItem(`${i}`));
            if (book.summary >= 9) {
                receivedBooks.push(book);
            }
        }
        this.setState({
            books: receivedBooks
        });
    };

    displayFreeBooks = (mode) => {
        let receivedBooks =[];
        for (let i = 0; i < localStorage.length - mode; i++) {
            const book = JSON.parse(localStorage.getItem(`${i}`));
            if (book.free) {
                receivedBooks.push(book);
            }
        }
        this.setState({
            books: receivedBooks
        });
    };

    componentWillReceiveProps(nextProps) {
        this.applyFilter(nextProps.filter, this.state.mode);
    };

    componentDidMount() {
        this.initialFunction(this.props.filter);
    };

    render() {
        return(<BookListRender books={ this.state.books } />)
    };
};
