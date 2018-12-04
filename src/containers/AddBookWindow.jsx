import React, { Component } from 'react';

import AddBookWindowRender from '../components/AddBookWindowRender/AddBookWindowRender.jsx';

export default class AddBookWindow extends Component {
    followCancelButton = (removeModalWindow) => {
        const cancelButtons = document.querySelectorAll(".cancel-button_js");
        cancelButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    removeModalWindow();
                });
        });
    };

    followAddBookButton = (addBook, changeWindowToRender) => {
        const addBookButton = document.querySelector(".add-button_js");
        addBookButton.addEventListener('click', (event) => {
            event.preventDefault();
            const newBook = this.getFormData(addBookButton.form);
            addBook(newBook);
            changeWindowToRender("Congratulations");
        });
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

    componentDidMount() {
        const { removeModalWindow, addBook, changeWindowToRender } = this.props;
        this.followCancelButton(removeModalWindow);
        this.followAddBookButton(addBook, changeWindowToRender);
    };

    render() {
        return(<AddBookWindowRender />)
    };
};
