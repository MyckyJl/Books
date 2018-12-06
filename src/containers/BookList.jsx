import React, { Component } from 'react';

import BookListRender from '../components/BookListRender/BookListRender.jsx';

import { standardBooks } from '../../data/books.js';

export default class BookList extends Component {
    constructor() {
        super();
        this.uploadStandardBooks();
        this.state = {
            books: [],
            filteredBooks: []
        };
    };

    uploadStandardBooks = () => {
        if (!("bookList" in localStorage)) {
            localStorage.setItem("bookList", JSON.stringify(standardBooks));
        }
    };

    applyFilter = (filter, searchText) => {
        switch(filter) {
            case 'All Books':
                this.displayAllBooks();
                break;
            case 'Most Recent':
                this.displayRecentBooks();
                break;
            case 'Most Popular':
                this.displayPopularBooks();
                break;
            case 'Free Books':
                this.displayFreeBooks();
                break;
            case 'Searching':
                this.displayFoundedBooks(searchText);
                break;
            default:
                break;
        }
    };

    displayAllBooks = () => {
        let receivedBooks =[];
        const bookList = JSON.parse(localStorage.getItem("bookList"));
        bookList.forEach((book) => {
            receivedBooks.push(book);
        });
        this.setState({
            books: receivedBooks,
            filteredBooks: receivedBooks
        });
    };

    displayRecentBooks = () => {
        let receivedBooks =[];
        const bookList = JSON.parse(localStorage.getItem("bookList"));
        bookList.forEach((book) => {
            if (book.recent) {
                receivedBooks.push(book);
            }
        });
        this.setState({
            books: receivedBooks,
            filteredBooks: receivedBooks
        });
    };

    displayPopularBooks = () => {
        let receivedBooks =[];
        const bookList = JSON.parse(localStorage.getItem("bookList"));
        bookList.forEach((book) => {
            if (book.summary >= 9) {
                receivedBooks.push(book);
            }
        });
        this.setState({
            books: receivedBooks,
            filteredBooks: receivedBooks
        });
    };

    displayFreeBooks = () => {
        let receivedBooks =[];
        const bookList = JSON.parse(localStorage.getItem("bookList"));
        bookList.forEach((book) => {
            if (book.free) {
                receivedBooks.push(book);
            }
        });
        this.setState({
            books: receivedBooks,
            filteredBooks: receivedBooks
        });
    };

    displayFoundedBooks = (searchText) => {
        const renderedBooks = this.state.filteredBooks;
        const newBookList = renderedBooks.filter((item) => {
            const bookTitleInLowerCase = item.bookTitle.toLowerCase();
            const searchTextInLowerCase = searchText.toLowerCase();
            if (bookTitleInLowerCase.indexOf(searchTextInLowerCase) === -1) {
                return false;
            }
            return true;
        });
        this.setState({
            books: newBookList
        });
    };

    uploadBook = (book, filter, searchText) => {
        const bookList = JSON.parse(localStorage.getItem("bookList"));
        localStorage.removeItem("bookList");
        bookList.push(book);
        localStorage.setItem("bookList", JSON.stringify(bookList));
        this.setState({
            books: bookList,
            filteredBooks: bookList
        });
        this.applyFilter(filter, searchText);
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.bookToAdd !== this.props.bookToAdd && nextProps.bookToAdd !=="") {
            this.uploadBook(nextProps.bookToAdd, nextProps.filter, nextProps.searchText);
        } else if (nextProps.searchText !== "") {
            const promise = new Promise((resolve) => {
                this.applyFilter(nextProps.filter, nextProps.searchText);
                resolve();
            });
            promise.then(() => {
                this.displayFoundedBooks(nextProps.searchText);
            });
        } else {
            this.applyFilter(nextProps.filter, nextProps.searchText);
        }
    };

    componentDidMount() {
        const { filter } = this.props;
        this.applyFilter(filter);

    };

    render() {
        return(<BookListRender books={ this.state.books } />)
    };
};
