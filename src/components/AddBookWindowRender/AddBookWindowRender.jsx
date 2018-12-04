import React, { Component } from 'react';

import './AddBookWindowRender.scss';

export default class AddBookWindowRender extends Component {
    render() {
        return(
            <div className={ "add-book-window" }>
                <button className={ "cancel-button cancel-button_js" }>CANCEL</button>
            </div>
        )
    };
};
