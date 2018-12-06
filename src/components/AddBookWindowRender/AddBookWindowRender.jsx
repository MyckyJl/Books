import React, { Component } from 'react';

import AddBookInfo from '../AddBookInfo/AddBookInfo.jsx';

import './AddBookWindowRender.scss';

export default class AddBookWindowRender extends Component {
    render() {
        const { addBookButtonAct, removeModalWindow } = this.props;
        return(
            <div className={ "add-book-window" }>
                <header className={ "add-book-window__header" } >
                    Add New Books
                    <i className= { "fas fa-times" } onClick={ removeModalWindow } />
                </header>
                <div className={ "add-book-window__info-container" }>
                    <aside className={ "add-book-window__side-list side-list" }>
                        <div className={ "side-list__item side-list__item_active" }>
                            <i className="fas fa-align-center" />
                            General
                        </div>
                        <div className={ "side-list__item" }>
                            <i className="fas fa-tags" />
                            Genre
                        </div>
                        <div className={ "side-list__item" }>
                            <i className="fas fa-file-image" />
                            Poster
                        </div>
                        <div className={ "side-list__item" }>
                            <i className="fas fa-info-circle" />
                            Info
                        </div>
                    </aside>
                    <AddBookInfo />
                </div>
                <footer className={ "add-book-window__footer" }>
                    <button className={ "add-book-window__button cancel-button" } onClick={ removeModalWindow }>CANCEL</button>
                    <input type={ "button" } className={ "add-book-window__button add-button" } onClick={ addBookButtonAct }
                           form={ "add-book-form"} value={ "ADD BOOK"} />
                </footer>
            </div>
        )
    };
};
