import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EventListComponent from './eventListComponent';
import {
    getOpenEvents,
    clearOpenEvents,
    getOpenSingleEvent,
    isInterested
} from './actions';
import { animateToElem } from '../../utils/general';
import './styles.scss';

class OpenEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            loaded: false
        };
        this.eventRef = null;
        this.isInterested = this.isInterested.bind(this);
        this.setEventRef = this.setEventRef.bind(this);
    }

    componentDidMount() {
        this.props.getOpenEvents().then(() => {
            console.log(this.eventRef);
            if (this.props.match.params.id) {
                this.eventRef && animateToElem(this.eventRef, 500); // scroll to elem
                this.props
                    .getOpenSingleEvent(this.props.match.params.id)
                    .then(() => this.setState({ loaded: true }));
            }
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.eventRef && animateToElem(this.eventRef, 500);
            this.setState({ loaded: false }, () => {
                this.props
                    .getOpenSingleEvent(this.props.match.params.id)
                    .then(() => this.setState({ loaded: true }));
            });
        }
    }

    componentWillUnmount() {
        this.props.clearOpenEvents();
    }

    setEventRef(e) {
        this.eventRef = e;
    }

    isInterested(id) {
        this.props.isInterested(id, this.props.userId);
    }

    render() {
        return (
            <div className="container">
                <div className="open-positions">
                    <div>
                        <h3>Open events in your location</h3>
                    </div>
                    <div>
                        {this.props.events.map(evt => (
                            <EventListComponent
                                key={evt._id}
                                setEventRef={this.setEventRef}
                                urlId={this.props.match.params.id || ''}
                                loaded={this.state.loaded}
                                isInterested={this.isInterested}
                                isAuthenticated={this.props.isAuthenticated}
                                activeEvent={
                                    evt._id === this.props.match.params.id
                                        ? this.props.activeEvent
                                        : {}
                                }
                                {...evt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ openEvents, authentication }) {
    return {
        events: openEvents.events,
        activeEvent: openEvents.activeEvent,
        isAuthenticated: authentication.isAuthenticated,
        userId : authentication.userData._id
    };
}

OpenEvents.propTypes = {
    getOpenEvents: PropTypes.func.isRequired,
    clearOpenEvents: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired,
    getOpenSingleEvent: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    activeEvent: PropTypes.object.isRequired,
    isInterested: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    userId : PropTypes.string
};

OpenEvents.defaultProps = {
    userId : null
};

export default connect(
    mapStateToProps,
    { getOpenEvents, clearOpenEvents, getOpenSingleEvent, isInterested }
)(OpenEvents);
