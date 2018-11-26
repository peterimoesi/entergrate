import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterIcon,
    TwitterShareButton
} from 'react-share';
import PropTypes from 'prop-types';
import './styles.scss';

const shareEvent = ({ id, title, description }) => (
    <div className="share-btns">
        <FacebookShareButton
            url={`${window.location.origin}/open-events/${id}`}
            quote={title}
        >
            <FacebookIcon size={32} />
        </FacebookShareButton>
        <TwitterShareButton
            url={`${window.location.origin}/open-events/${id}`}
            title={title}
        >
            <TwitterIcon size={32} />
        </TwitterShareButton>
        <LinkedinShareButton
            url={`${window.location.origin}/open-events/${id}`}
            title={title}
            description={description}
        >
            <LinkedinIcon size={32} />
        </LinkedinShareButton>
    </div>
);

shareEvent.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

shareEvent.defaultProps = {
    description: null
};

export default shareEvent;
