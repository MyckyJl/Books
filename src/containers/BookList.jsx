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

    initialFunction = (filter) => {
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

    displayAllBooks = () => {
        let receivedBooks =[];
        for (let i = 0; i < localStorage.length; i++) {
            const book = JSON.parse(localStorage.getItem(`${i}`));
            if (book) {
                receivedBooks.push(book);
            }
        }
        this.setState({
            books: receivedBooks
        });
    };

    displayRecentBooks = () => {
        let receivedBooks =[];
        for (let i = 0; i < localStorage.length; i++) {
            const book = JSON.parse(localStorage.getItem(`${i}`));
            if (book) {
                if (book.recent) {
                    receivedBooks.push(book);
                }
            }
        }
        this.setState({
            books: receivedBooks
        });
    };

    displayPopularBooks = () => {
        let receivedBooks =[];
        for (let i = 0; i < localStorage.length; i++) {
            const book = JSON.parse(localStorage.getItem(`${i}`));
            if (book) {
                if (book.summary >= 9) {
                    receivedBooks.push(book);
                }
            }
        }
        this.setState({
            books: receivedBooks
        });
    };

    displayFreeBooks = () => {
        let receivedBooks =[];
        for (let i = 0; i < localStorage.length; i++) {
            const book = JSON.parse(localStorage.getItem(`${i}`));
            if (book) {
                if (book.free) {
                    receivedBooks.push(book);
                }
            }
        }
        this.setState({
            books: receivedBooks
        });
    };

    uploadBook = (book) => {
        localStorage.setItem(`${ this.state.books.length + 1 }`, JSON.stringify(book));
        const newBooks = this.state.books;
        newBooks.push(book);
        this.setState({
            books: newBooks
        });
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.bookToAdd !== this.props.bookToAdd && nextProps.bookToAdd !=="") {
            this.uploadBook(nextProps.bookToAdd);
        } else {
            this.applyFilter(nextProps.filter, this.state.mode);
        }
    };

    componentDidMount() {
        const { filter } = this.props;
        this.initialFunction(filter);
    };

    render() {
        return(<BookListRender books={ this.state.books } />)
    };
};
