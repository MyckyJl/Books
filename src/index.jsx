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
            modalWindowStatus: false
        };
    };

    changeBookFilter = (newFilter) => {
        this.setState({
            filter: newFilter
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

    render() {
        const { bookFilter, modalWindowStatus } = this.state;
        return(
            <Fragment>
                <SideBar renderModalWindow={ this.renderModalWindow }/>
                <div className={ "page-content" }>
                    <Header applyFilter={ this.changeBookFilter } />
                    <BookList filter={ bookFilter } />
                </div>
                <ModalWindow renderStatus={ modalWindowStatus } removeModalWindow={ this.removeModalWindow } />
            </Fragment>
        )
    };
}

ReactDom.render(<App />, document.getElementById('root'));
