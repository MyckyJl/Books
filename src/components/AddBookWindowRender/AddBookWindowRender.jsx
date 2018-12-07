import React, { Component } from 'react';

import AddBookInfo from '../../containers/AddBookInfo.jsx';

import './AddBookWindowRender.scss';

export default class AddBookWindowRender extends Component {
    shouldRenderAddButton = () => {
        const { window } = this.props;
        if (window === "Add New Books") {
            return (
                <input type={ "button" } className={ "add-book-window__button add-button" } onClick={ this.props.addBookButtonAct }
                       form={ "add-book-form"} value={ "ADD BOOK"} />
            )
        }
        return null;
    };

    closeButtonAct = () => {
        this.props.removeModalWindow();
        this.props.resetModalWindow("Add New Books");
    };

    render() {
        const { changeTab, tab, window, processedBook } = this.props;

        return(
            <div className={ "add-book-window" }>
                <header className={ "add-book-window__header" } >
                    {window}
                    <i className= { "fas fa-times" } onClick={ this.closeButtonAct } />
                </header>
                <div className={ "add-book-window__info-container" }>
                    <aside className={ "add-book-window__side-list side-list" }>
                        <div className={ "side-list__item side-list__item_general" } onClick={ changeTab }>
                            <i className="fas fa-align-center" />
                            General
                        </div>
                        <div className={ "side-list__item side-list__item_genre" } onClick={ changeTab }>
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
                    <AddBookInfo tab={ tab } window ={ window } processedBook={ processedBook } />
                </div>
                <footer className={ "add-book-window__footer" }>
                    <button className={ "add-book-window__button cancel-button" } onClick={ this.closeButtonAct }>CANCEL</button>
                    { this.shouldRenderAddButton() }
                </footer>
            </div>
        )
    };
};
