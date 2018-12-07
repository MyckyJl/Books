import React, { Component } from 'react';

import AddBookInput from '../AddBookInput/AddBookInput.jsx';

import './AddBookInfoRender.scss';

export default class AddBookInfoRender extends Component {

    render() {
        const { window, processedBook } = this.props;
        return(
            <form id={ "add-book-form" }>
                <div className={ "tab tab_general_js" }>
                    <AddBookInput title={ "Title" } mandatory={ true } short={ false } name={"bookTitle"} window={ window } processedBook={ processedBook } />
                    <AddBookInput title={ "Author" } mandatory={ true } short={ false } name={"authorName"} window={ window } processedBook={ processedBook } />
                    <AddBookInput title={ "Publisher" } mandatory={ true } short={ false } name={"publisherName"} window={ window } processedBook={ processedBook } />
                    <AddBookInput title={ "Paperback" } mandatory={ false } short={ true } name={"paperback"} window={ window } processedBook={ processedBook } />
                    <AddBookInput title={ "ISBN" } mandatory={ true } short={ true } name={"ISBN"} window={ window } processedBook={ processedBook } />
                    <AddBookInput title={ "Summary" } mandatory={ false } short={ false } name={"summary"} window={ window } processedBook={ processedBook } />
                </div>
                <div className={ "tab tab_genre_js" }>
                    <AddBookInput title={ "Genre" } mandatory={ false } short={ false } name={ "genre" } window={ window } processedBook={ processedBook } />
                </div>
            </form>
        )
    };
};
