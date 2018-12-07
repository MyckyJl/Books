import React, {Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import SideBar from './containers/SideBar.jsx';
import Header from './containers/Header.jsx';
import BookList from './containers/BookList.jsx';
import ModalWindow from './containers/ModalWindow.jsx';

import './index.scss';

class App extends Component {
    constructor() {
        super();
        this.state = {
            bookFilter: 'All Books',
            searchText: '',
            modalWindowStatus: false,
            modalWindow: 'Add New Books',
            addedBookStatus: false,
            processedBook: ''
        };
    };

    changeBookFilter = (newFilter) => {
        this.setState({
            bookFilter: newFilter
        });
    };

    renderModalWindow = () => {
        this.setState({
            modalWindowStatus: true
        });
    };

    removeModalWindow = () => {
        this.setState({
            modalWindowStatus: false
        })
    };

    setBookToAdd = (book) => {
        this.setState({
            processedBook: book,
            addedBookStatus: true
        });
    };

    clearAddedBook = () => {
        if (this.state.addedBookStatus !== false) {
            this.state.addedBookStatus = false;
        }
    };

    applySearch = (searchText) => {
        this.setState({
            bookFilter: "Searching",
            searchText: searchText
        });
    };

    openBookWindow = (book) => {
        this.setState({
            modalWindowStatus: true,
            modalWindow: "Book info",
            processedBook: book
        });
    };

    resetModalWindow = (window) => {
        this.setState({
            modalWindow: window,
        });
    };

    componentDidUpdate() {
        this.clearAddedBook();
    };

    render() {
        const { bookFilter, modalWindowStatus, processedBook, searchText, modalWindow, addedBookStatus} = this.state;
        return(
            <Fragment>
                <SideBar renderModalWindow={ this.renderModalWindow } />
                <div className={ "page-content" }>
                    <Header applyFilter={ this.changeBookFilter } applySearch={ this.applySearch } />
                    <BookList filter={ bookFilter } processedBook={ processedBook } searchText={ searchText }
                              openBookWindow={ this.openBookWindow } addedBookStatus={ addedBookStatus }
                              clearAddedBook={ this.clearAddedBook } />
                </div>
                <ModalWindow renderStatus={ modalWindowStatus } removeModalWindow={ this.removeModalWindow }
                             addBook={ this.setBookToAdd } processedBook={ processedBook } window={ modalWindow }
                             resetModalWindow={ this.resetModalWindow } clearAddedBook={ this.clearAddedBook }/>
            </Fragment>
        )
    };
}

ReactDom.render(<App />, document.getElementById('root'));
