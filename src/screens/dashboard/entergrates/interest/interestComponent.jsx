import React from 'react';
import PropTypes from 'prop-types';

import { formatISODate } from '../../../../utils/general';

import './styles.scss';

const interest = ({ active, interestItem, showMore, toggleShowMore }) => (
    <div className="volunteer-interest">
        <div className="interest-status">
            <span>{active ? 'Ongoing' : 'Closed'}</span>
            <div className={`status-icon status-${active ? 'green' : 'red'}`} />
        </div>
        <div className="interest-name">
            <h5>
                <span>{interestItem.businessName} : </span>
                <span>{interestItem.name}</span>
            </h5>
        </div>
        <div className="interest-applied-date">
            {/* <span>Applied: {interestItem.dateApplied} </span> */}
            <span
                className="show-more-interest"
                onClick={() => toggleShowMore(interestItem._id)}
                tabIndex="0"
                role="button"
            >
                {' '}
                Show {showMore === interestItem._id ? 'less -' : 'more +'}
            </span>
        </div>
        {showMore === interestItem._id ? (
            <div className="show-more-item">
                <div className="interest-location-date">
                    <div>
                        <div className="item-head">Date & Time</div>
                        <div>{formatISODate(interestItem.dateTime)}</div>
                    </div>
                    <div>
                        <div className="item-head">Location</div>
                        <div>{interestItem.location}</div>
                    </div>
                </div>
                <div>
                    <div className="item-head">Description</div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: interestItem.description
                        }}
                    />
                </div>
            </div>
        ) : null}
    </div>
);

interest.propTypes = {
    interestItem: PropTypes.object.isRequired,
    showMore: PropTypes.string.isRequired,
    toggleShowMore: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired
};

export default interest;
