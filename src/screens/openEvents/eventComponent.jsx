import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading';
import Button from '../../components/buttons';

const EventComponent = ({
    loaded,
    activeEvent,
    isInterested,
    isAuthenticated,
    waiting
}) => (
    <div className="col-lg-8 col-md-10 col-sm-9 col-12 offset-md-2">
        {!loaded ? (
            <Loading />
        ) : (
            <div>
                <div className="interested-cta">
                    {isAuthenticated ? (
                        <Button
                            title={
                                waiting ? 'Please wait...' : 'I\'m interested'
                            }
                            type="primary"
                            onClick={() => isInterested(activeEvent._id)}
                            icon={waiting ? null : 'check'}
                            disabled={waiting}
                        />
                    ) : (
                        <Link
                            to={{
                                pathname: '/login',
                                state: { referrer: window.location.pathname }
                            }}
                        >
                            <Button
                                title="I'm interested"
                                type="primary"
                                onClick={() => null}
                                icon="check"
                            />
                        </Link>
                    )}
                </div>
            </div>
        )}
    </div>
);

EventComponent.propTypes = {
    id: PropTypes.string.isRequired,
    loaded: PropTypes.bool.isRequired,
    activeEvent: PropTypes.object.isRequired,
    isInterested: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    waiting: PropTypes.bool.isRequired
};

export default EventComponent;
