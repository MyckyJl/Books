import React, { Component } from 'react';

import AddBookWindowRender from '../components/AddBookWindowRender/AddBookWindowRender.jsx';

export default class AddBookWindow extends Component {
    constructor() {
        super();
        this.state = {
            tab: 'General'
        };
    };

    changeTab = (event) => {
        const newTab = event.target.innerText;
        this.setState({
            tab: newTab
        });
    };

    addBookButtonAct = (event) => {
        const addBookButton = event.target;
        const newBook = this.getFormData(addBookButton.form);
        this.validation(newBook, addBookButton);
    };

    getFormData = (form) => {
        const data = form.elements;
        const newBook = {};
        for(let i = 0;i < data.length; i++) {
            const propertyName = form.elements[i].name;
            newBook[propertyName] = form.elements[i].value;
        }
        newBook.recent = true;
        return newBook;
    };

    validation = (book) => {
        const { addBook, resetModalWindow } = this.props;
        const { bookTitle, authorName, publisherName, ISBN, summary } = book;
        let bookTitleValidation;
        let authorNameValidation;
        let publisherNameValidation;
        let ISBNValidation;
        let summaryValidation;
        if (bookTitle === '') {
            const bookTitleField = document.querySelector(".bookTitle_js");
            bookTitleField.classList.remove("successful-validation");
            bookTitleField.classList.add("failed-validation");
            bookTitleValidation = false;
        } else {
            const bookTitleField = document.querySelector(".bookTitle_js");
            bookTitleField.classList.remove("failed-validation");
            bookTitleField.classList.add("successful-validation");
            bookTitleValidation = true;
        }
        if (authorName === '') {
            const authorNameField = document.querySelector(".authorName_js");
            authorNameField.classList.remove("successful-validation");
            authorNameField.classList.add("failed-validation");
            authorNameValidation = false;
        } else {
            const authorNameField = document.querySelector(".authorName_js");
            authorNameField.classList.remove("failed-validation");
            authorNameField.classList.add("successful-validation");
            authorNameValidation = true;
        }
        if (publisherName === '') {
            const publisherNameField = document.querySelector(".publisherName_js");
            publisherNameField.classList.remove("successful-validation");
            publisherNameField.classList.add("failed-validation");
            publisherNameValidation = false;
        } else {
            const publisherNameField = document.querySelector(".publisherName_js");
            publisherNameField.classList.remove("failed-validation");
            publisherNameField.classList.add("successful-validation");
            publisherNameValidation = true;
        }
        if (ISBN === '' || (/\D/.test(ISBN))) {
            const ISBNField = document.querySelector(".ISBN_js");
            ISBNField.classList.remove("successful-validation");
            ISBNField.classList.add("failed-validation");
            ISBNValidation = false;
        } else {
            const ISBNField = document.querySelector(".ISBN_js");
            ISBNField.classList.remove("failed-validation");
            ISBNField.classList.add("successful-validation");
            ISBNValidation = true;
        }
        if (summary === '') {
            const summaryField = document.querySelector(".summary_js");
            summaryField.classList.remove("successful-validation");
            summaryField.classList.remove("failed-validation");
            summaryValidation = true;
        } else if (!summary.match(/^[0-9]$|^10$/)) {
            const summaryField = document.querySelector(".summary_js");
            summaryField.classList.remove("successful-validation");
            summaryField.classList.add("failed-validation");
            summaryValidation = false;
        } else {
            const summaryField = document.querySelector(".summary_js");
            summaryField.classList.remove("failed-validation");
            summaryField.classList.add("successful-validation");
            summaryValidation = true;
        }
        const validationStatus = bookTitleValidation && authorNameValidation && publisherNameValidation && ISBNValidation && summaryValidation;
        if (validationStatus) {
            addBook(book);
            resetModalWindow("Congratulations");
        }
    };

    render() {
        const { removeModalWindow, processedBook, window, resetModalWindow } = this.props;
        const { tab } = this.state;
        return(<AddBookWindowRender addBookButtonAct={ this.addBookButtonAct } removeModalWindow={ removeModalWindow }
                                    changeTab={ this.changeTab } tab={ tab } processedBook={ processedBook }
                                    window={ window } resetModalWindow={ resetModalWindow } />)
    };
};
