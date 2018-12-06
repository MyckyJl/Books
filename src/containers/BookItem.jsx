import React, { Component } from 'react';

import BookItemRender from '../components/BookItemRender/BookItemRender.jsx';

export default class BookItem extends Component {

    countStars = (rating) => {
        function pushStar(star) {
            starsArr.push(star);
        }

        let starsArr = [];
        if (rating % 2 !== 1) {
            const fullStars = rating/2;
            while (starsArr.length < fullStars) {
                pushStar(<i key={ starsArr.length } className={ "fas fa-star star" } />);
            }
            while (starsArr.length < 5) {
                pushStar(<i key={ starsArr.length } className={ "far fa-star star" } />);
            }
            return starsArr;
        } else {
            const fullStars = (rating - 1) / 2;
            while (starsArr.length < fullStars) {
                pushStar(<i key={ starsArr.length } className={ "fas fa-star star" } />);
            }
            pushStar(<i key={ starsArr.length } className={ "fas fa-star-half-alt star" } />);
            while (starsArr.length < 5) {
                pushStar(<i key={ starsArr.length } className={ "far fa-star star" } />);
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
