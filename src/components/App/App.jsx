import React, {Component, Fragment} from 'react';

import BookList from '../../containers/BookList.jsx';

import './App.scss';

export default class App extends Component {
    render() {
        return(
            <Fragment>
                <BookList/>
            </Fragment>
        )
    };
};
