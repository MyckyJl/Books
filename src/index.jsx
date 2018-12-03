import React, {Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import SideBar from './containers/SideBar.jsx';
import Header from './containers/Header.jsx';
import BookList from './containers/BookList.jsx';

import './index.scss';

class App extends Component {
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
                <div className={ "page-content" }>
                    <Header changeFilter={ this.changeFilter } />
                    <BookList filter={ this.state.filter } />
                </div>
            </Fragment>
        )
    };
}

ReactDom.render(<App />, document.getElementById('root'));
