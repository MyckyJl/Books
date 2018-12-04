import React, { Component } from 'react';

import AddBookInput from '../AddBookInput/AddBookInput.jsx';

import './AddBookInfo.scss';

export default class AddBookInfo extends Component {
    render() {
        return(
            <form id={ "add-book-form" }>
                <AddBookInput title={ "Title" } mandatory={ true } short={ false } name={"bookTitle"} />
                <AddBookInput title={ "Author" } mandatory={ true } short={ false } name={"authorName"} />
                <AddBookInput title={ "Publisher" } mandatory={ true } short={ false } name={"publisherName"} />
                <AddBookInput title={ "Paperback" } mandatory={ false } short={ true } name={"paperback"} />
                <AddBookInput title={ "ISBN" } mandatory={ true } short={ true } name={"ISBN"} />
                <AddBookInput title={ "Summary" } mandatory={ false } short={ false } name={"summary"} />
            </form>
        )
    };
};
