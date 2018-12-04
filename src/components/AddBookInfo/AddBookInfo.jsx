import React, { Component } from 'react';

import AddBookInput from '../AddBookInput/AddBookInput.jsx';

import './AddBookInfo.scss';

export default class AddBookInfo extends Component {
    render() {
        return(
            <form id={ "add-book-form" }>
                <AddBookInput title={ "Title" } mandatory={ true } short={ false } />
                <AddBookInput title={ "Author" } mandatory={ true } short={ false } />
                <AddBookInput title={ "Publisher" } mandatory={ true } short={ false } />
                <AddBookInput title={ "Paperback" } mandatory={ false } short={ true } />
                <AddBookInput title={ "ISBN" } mandatory={ true } short={ true } />
                <AddBookInput title={ "Summary" } mandatory={ false } short={ false } />
            </form>
        )
    };
};
