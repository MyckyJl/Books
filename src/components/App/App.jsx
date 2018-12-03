import React, {Component, Fragment} from 'react';

import Header from '../../containers/Header.jsx';
import BookList from '../../containers/BookList.jsx';

import './App.scss';

export default class App extends Component {
    render() {
        return(
            <Fragment>
                <Header />
                <BookList />
            </Fragment>
        )
    };
};
