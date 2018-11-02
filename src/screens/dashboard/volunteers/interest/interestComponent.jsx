import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const interest = ({ interestItem, showMore, toggleShowMore }) => (
    <div className="volunteer-interest">
        <div className="interest-status">
            <span>{interestItem.active ? 'Ongoing' : 'Closed'}</span>
            <div
                className={`status-icon status-${
                    interestItem.active ? 'green' : 'red'
                }`}
            />
        </div>
        <div className="interest-name">
            <h4>
                <span>{interestItem.owner.fullName} : </span>
                <span>{interestItem.name}</span>
            </h4>
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
                        <div className="item-head">Date</div>
                        <div>{interestItem.date}</div>
                    </div>
                    <div>
                        <div className="item-head">Time</div>
                        <div>{interestItem.time}</div>
                    </div>
                    <div>
                        <div className="item-head">Location</div>
                        <div>{interestItem.location}</div>
                    </div>
                </div>
                <div>
                    <div className="item-head">Description</div>
                    <div>{interestItem.description}</div>
                </div>
                <div>
                    <div className="item-head">Requirements</div>
                    <ul>
                        {interestItem.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ) : null}
    </div>
);

interest.propTypes = {
    interestItem: PropTypes.object.isRequired,
    showMore: PropTypes.string.isRequired,
    toggleShowMore: PropTypes.func.isRequired
};

export default interest;
