import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../../../components/buttons';
import CollapseSection from '../../../../components/collapseSection/collapseSection';
import EventComponent from './eventComponent';
import Modal from '../../../../components/modals';
import EventForm from './eventForm';

import { getEvents } from './actions';

class Events extends React.Component {
    constructor() {
        super();
        this.state = {
            expand: false,
            dataLoaded: false,
            showMore: '',
            openModal: false,
            eventIndex: '',
            modalChild: null
        };
        this.toggleExpand = this.toggleExpand.bind(this);
        this.toggleShowMore = this.toggleShowMore.bind(this);
        this.onModify = this.onModify.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    toggleExpand() {
        this.setState({ expand: !this.state.expand }, () => {
            if (this.state.expand) {
                this.props
                    .getEvents(this.props.userId)
                    .then(res => res && this.setState({ dataLoaded: true }));
            } else {
                this.setState({ dataLoaded: false });
            }
        });
    }

    toggleShowMore(id) {
        const { showMore } = this.state;
        if (id === showMore) {
            this.setState({ showMore: '' });
        } else {
            this.setState({ showMore: id });
        }
    }

    onModify(i) {
        this.setState({ modalChild: 'modifyEvent', eventIndex: i });
        this.openModal();
    }

    openModal() {
        this.setState({ openModal: true });
    }

    closeModal() {
        this.setState({ openModal: false, modalChild: null });
    }

    render() {
        const {
            modalChild,
            openModal,
            expand,
            dataLoaded,
            showMore
        } = this.state;
        return (
            <CollapseSection
                name={`Events (${
                    this.props.eventLength <= 10
                        ? this.props.eventLength
                        : '10+'
                })`}
                expand={expand}
                dataLoaded={dataLoaded}
                toggleExpand={this.toggleExpand}
            >
                <div>
                    {openModal ? (
                        <Modal close={this.closeModal}>
                            <div>
                                {modalChild === 'newEvent' ? (
                                    <EventForm closeForm={this.closeModal} />
                                ) : null}
                                {modalChild === 'modifyEvent' ? (
                                    <EventForm
                                        modify
                                        closeForm={this.closeModal}
                                        eventData={
                                            this.props.events[
                                                this.state.eventIndex
                                            ]
                                        }
                                    />
                                ) : null}
                            </div>
                        </Modal>
                    ) : null}
                    <div>
                        <div>
                            {this.props.events.map((evt, i) => (
                                <EventComponent
                                    key={evt._id}
                                    event={evt}
                                    showMore={showMore}
                                    toggleShowMore={this.toggleShowMore}
                                    onModify={this.onModify}
                                    index={i}
                                />
                            ))}
                        </div>
                        <div className="section-cta">
                            <Button
                                title="Add new"
                                onClick={() =>
                                    this.setState({
                                        modalChild: 'newEvent',
                                        openModal: true
                                    })
                                }
                                type="secondary"
                            />
                        </div>
                    </div>
                </div>
            </CollapseSection>
        );
    }
}

Events.propTypes = {
    userId: PropTypes.string.isRequired,
    getEvents: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired,
    eventLength: PropTypes.number.isRequired
};

function mapStateToProps({ authentication, events }) {
    return {
        userId: authentication.userData._id,
        eventLength: authentication.userData.events.length,
        events: events.events
    };
}

export default connect(
    mapStateToProps,
    { getEvents }
)(Events);
