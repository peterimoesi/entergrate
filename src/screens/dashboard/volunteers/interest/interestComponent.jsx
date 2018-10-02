import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const interest = ({ interestItem, showMore, toggleShowMore }) => (
    <div className="volunteer-interest">
        <div className="interest-status">
            <span>{interestItem.active ? 'Ongoing' : 'Closed'}</span>
            <div className={`status-icon status-${interestItem.active ? 'green' : 'red'}`}/>
        </div>
        <div className="interest-name">
            <h4>
                <span>{interestItem.businessName} : </span>
                <span>{interestItem.eventName}</span>
            </h4>
        </div>
        <div className="interest-applied-date">
            <span>Applied: {interestItem.dateApplied} </span>
            <span
                className="show-more-interest"
                onClick={() => toggleShowMore(interestItem.id)}
                tabIndex="0"
                role="button"
            > Show {showMore === interestItem.id ? 'less -' : 'more +'}</span>
        </div>
        {
            showMore === interestItem.id ?
                <div className="show-more-item">
                    <div>
                        <div className="item-head">Description</div>
                        <div>{interestItem.eventDescription}</div>
                    </div>
                    <div>
                        <div className="item-head">Location</div>
                        <div>{interestItem.eventLocation}</div>
                    </div>
                </div> : null
        }
        
    </div>
);

interest.propTypes = {
    interestItem : PropTypes.object.isRequired,
    showMore : PropTypes.string.isRequired,
    toggleShowMore : PropTypes.func.isRequired
};

export default interest;
