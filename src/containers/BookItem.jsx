import React, { Component } from 'react';

import BookItemRender from '../components/BookItemRender/BookItemRender.jsx';

export default class BookItem extends Component {

    countStars = (rating) => {
        function pushStar(className) {
            starsArr.push(<span key ={ counter } className={ className } />);
            counter ++;
        }

        let starsArr = [];
        let counter = 0;

        if (rating % 2 !== 1) {
            const fullStars = rating/2;
            while (counter < fullStars) {
                pushStar("star star_full");
            }
            while (counter < 5) {
                pushStar("star star_empty");
            }
            return starsArr;
        } else {
            const fullStars = (rating - 1) / 2;
            while (counter < fullStars) {
                pushStar("star star_full");
            }
            pushStar("star star_half");
            while (counter < 5) {
                pushStar("star star_empty");
            }
            return starsArr;
        }
    };

    render() {
        const { book } = this.props;
        const starsArr = this.countStars(book.summary);

        return(<BookItemRender book={ book } starsArr={ starsArr } />)
    };
};
