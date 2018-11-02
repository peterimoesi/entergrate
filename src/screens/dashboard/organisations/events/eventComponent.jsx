import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/buttons';

import defaultImg from '../../../../components/img/2.png';

import './styles.scss';

import { formatISODate } from '../../../../utils/general';

const EventComponent = ({
    event,
    toggleShowMore,
    showMore,
    onModify,
    index,
    onViewVolunteers,
    viewVolunteers
}) => (
    <div className="event-details">
        <div className="event-default">
            <div className="event-head">
                <div className="event-title">
                    <img src={event.image || defaultImg} />
                    <span>{event.name}</span>
                </div>
                <div>Date & time: {formatISODate(event.dateTime)}</div>
                <div>Location : {event.location}</div>
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
                >
                    show {showMore === event._id ? 'less -' : 'more +'}
                </div>
            </div>
        </div>
        {showMore === event._id ? (
            <div className="show-more-item">
                <div>
                    <div className="item-head">Description</div>
                    <div>{event.description}</div>
                </div>
                <div className="event-management">
                    <div
                        className="item-head manage"
                        onClick={() => onViewVolunteers()}
                    >
                        <span>{viewVolunteers ? 'Close' : 'View'}</span>{' '}
                        volunteers ({event.volunteers.length})
                    </div>
                    {viewVolunteers ? (
                        <div className="volunteer-list">
                            <div className="volunteer-list-head">
                                Volunteers
                            </div>
                            <div>
                                {event.volunteers.map(vol => (
                                    <div
                                        className="row volunteer-item"
                                        key={vol._id}
                                    >
                                        <div className="col-lg-10 col-md-9 col-12 vol-itm-dtls">
                                            <div>
                                                {vol.fullName} -{' '}
                                                <span
                                                    style={{
                                                        fontStyle: 'italic'
                                                    }}
                                                >
                                                    {vol.email}
                                                </span>
                                            </div>
                                            <div>
                                                <div className="vol-head">
                                                    Bio
                                                </div>
                                                <div className="meb-since">
                                                    (Member since{' '}
                                                    {formatISODate(
                                                        vol.createdAt,
                                                        'monthYear'
                                                    )}
                                                    )
                                                </div>
                                                <div>{vol.bio}</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-12 vol-itm-btn">
                                            <a
                                                href={
                                                    vol.personalUrl ||
                                                    window.location.pathname
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Button
                                                    type="secondary"
                                                    onClick={() => null}
                                                    title="View Profile"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null}
                    <div
                        className="item-head modify"
                        onClick={() => onModify(index)}
                    >
                        Modify
                    </div>
                    <div className="item-head delete">Delete</div>
                </div>
            </div>
        ) : null}
    </div>
);

EventComponent.propTypes = {
    event: PropTypes.object.isRequired,
    toggleShowMore: PropTypes.func.isRequired,
    showMore: PropTypes.string.isRequired,
    onModify: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    onViewVolunteers: PropTypes.func.isRequired,
    viewVolunteers: PropTypes.bool.isRequired
};

export default EventComponent;
