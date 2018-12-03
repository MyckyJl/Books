import React, {Component, Fragment } from 'react';

import Header from '../../containers/Header.jsx';
import BookList from '../../containers/BookList.jsx';
import SideBar from '../SideBar/SideBar.jsx';

import './App.scss';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            filter: 'All Books'
        };
    };

    changeFilter = (newFilter) => {
        this.setState({
            filter: newFilter
        });
    };

    render() {
        return(
            <Fragment>
                <SideBar />
                <div className={ "content-container" }>
                    <Header changeFilter={ this.changeFilter } />
                    <BookList filter={ this.state.filter } />
                </div>
            </Fragment>
        )
    };
};
