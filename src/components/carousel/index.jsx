import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './styles.scss';

const about = props => (
    <div className="carousel-cont">
        <Carousel
            autoPlay={true}
            showThumbs={false}
            showArrows={false}
            infiniteLoop
            showIndicators={false}
            dynamicHeight
        >
            {props.img.map((image, i) => (
                <div key={i}>
                    <img src={image} />
                </div>
            ))}
        </Carousel>
        <div className="carosel-child">{props.children}</div>
    </div>
);

about.propTypes = {
    children: PropTypes.element.isRequired,
    img: PropTypes.array
};

about.defaultProps = {
    img: []
};

export default about;
