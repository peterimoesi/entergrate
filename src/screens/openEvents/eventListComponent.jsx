import React from 'react';
import PropTypes from 'prop-types';
import { Link, Switch, Route } from 'react-router-dom';

import EventComponent from './eventComponent';
import Button from '../../components/buttons';
import defaultImg from '../../components/img/2.png';
import { formatISODate } from '../../utils/general';
import './styles.scss';

const eventListComponent = ({
    businessName,
    name,
    description,
    location,
    dateTime,
    image,
    setEventRef,
    urlId,
    loaded,
    activeEvent,
    isAuthenticated,
    isInterested,
    waiting,
    _id
}) => (
    <div
        className="row open-event-list-item"
        ref={e => (urlId === _id ? setEventRef(e) : null)}
    >
        <div className="col-lg-2 col-md-2 col-sm-3 col-3">
            <div className="open-event-picture">
                <img src={image || defaultImg} />
            </div>
        </div>
        <div className="col-lg-8 col-md-10 col-sm-9 col-12">
            <div className="open-event-details">
                <h5>{name}</h5>
                <h5 className="open-event-owner">{businessName}</h5>
                <div
                    dangerouslySetInnerHTML={{
                        __html:
                            window.location.pathname === `/open-events/${_id}`
                                ? description
                                : `${description.substr(
                                    0,
                                    240
                                )}<span>...</span>`
                    }}
                />
                <div className="open-event-date-location">
                    <div>Date : {formatISODate(dateTime)}</div>
                    <div>Location : {location}</div>
                </div>
            </div>
        </div>
        <div className="col-lg-2 col-md-6 col-12 col-sm-12 offset-md-2">
            <div className="open-event-action">
                <Link to={`/open-events/${urlId === _id ? '' : _id}`}>
                    <Button
                        title={urlId === _id ? 'Read less' : 'Read more'}
                        onClick={() => null}
                        size="md"
                        type="secondary"
                    />
                </Link>
            </div>
        </div>

        <Switch>
            <Route
                path={`/open-events/${_id}`}
                render={props => (
                    <EventComponent
                        {...props}
                        waiting={waiting}
                        id={_id}
                        loaded={loaded}
                        activeEvent={activeEvent}
                        isAuthenticated={isAuthenticated}
                        isInterested={isInterested}
                    />
                )}
            />
        </Switch>
    </div>
);

eventListComponent.propTypes = {
    businessName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    dateTime: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    setEventRef: PropTypes.func.isRequired,
    urlId: PropTypes.string.isRequired,
    loaded: PropTypes.bool.isRequired,
    activeEvent: PropTypes.object.isRequired,
    isInterested: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    waiting: PropTypes.bool.isRequired
};

export default eventListComponent;
