import React from 'react';
import PropTypes from 'prop-types';

import defaultImg from '../../../../components/img/2.png';

import './styles.scss';

const EventComponent = ({ event, toggleShowMore, showMore, onModify, index }) => (
    <div className="event-details">
        <div className="event-default">
            <div className="event-head">
                <div className="event-title">
                    <img src={event.image || defaultImg }/>
                    <span>{event.name}</span>
                </div>
                <div>Date : {event.date}</div>
                <div>Time : {event.time} </div>
                <div>
                    Location : {event.location}
                </div>
            </div>
            <div className="event-admin-detail">
                <div>
                    <div>Date created : {event.dateCreated}</div>
                    <div>Volunteers ({event.volunteers.length})</div>
                </div>
                <div
                    className="show-more"
                    onClick={() => toggleShowMore(event._id)}
                    tabIndex="0"
                    role="button"
                >show { showMore === event._id ? 'less -' : 'more +'}</div>
            </div>
        </div>
        {
            showMore === event._id ?
                <div className="show-more-item">
                    <div>
                        <div className="item-head">Description</div>
                        <div>{event.description}</div>
                    </div>
                    <div className="event-management">
                        <div className="item-head manage">View volunteers ({event.volunteers.length})</div>
                        <div className="item-head modify" onClick={() => onModify(index)}>Modify</div>
                        <div className="item-head delete">Delete</div>
                    </div>
                </div> : null
        }
        
    </div>
);

EventComponent.propTypes = {
    event : PropTypes.object.isRequired,
    toggleShowMore : PropTypes.func.isRequired,
    showMore : PropTypes.string.isRequired,
    onModify : PropTypes.func.isRequired,
    index : PropTypes.number.isRequired
};

export default EventComponent;
