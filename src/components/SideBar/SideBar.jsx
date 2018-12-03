import React, { Component } from 'react';

import './SideBar.scss';

export default class App extends Component {
    render() {
        return(
            <aside className={ "aside" }>
                <div className={ "aside__button-container" }>
                    <button className={ "aside__button" }>
                        <i className="fas fa-plus plus-icon" />
                        ADD A BOOK
                    </button>
                </div>
                <ul className={ "aside__menu menu" }>
                    <li className={ "menu__item" }>
                        <i className="fas fa-book menu__img" />
                        Now Reading
                    </li>
                    <li className={ "menu__item" }>
                        <i className="fas fa-globe-americas menu__img" />
                        Browse
                    </li>
                    <li className={ "menu__item" }>
                        <i className="fas fa-shopping-cart menu__img" />
                        Buy Books
                    </li>
                    <li className={ "menu__item" }>
                        <i className="fas fa-star menu__img" />
                        Favourite Books
                    </li>
                    <li className={ "menu__item" }>
                        <i className="fas fa-th-list menu__img" />
                        Wishlist
                    </li>
                </ul>
            </aside>
        )
    };
};
