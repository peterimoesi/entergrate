import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../../../components/buttons';
import CollapseSection from '../../../../components/collapseSection/collapseSection';
import EventComponent from './eventComponent';
import Modal from '../../../../components/modals';
import modalAction from '../../../../components/modals/action';
import EventForm from './eventForm';
import ContactForm from './contactForm';

import { getEvents, contact } from './actions';

class Events extends React.Component {
    constructor() {
        super();
        this.state = {
            expand: false,
            dataLoaded: false,
            showMore: '',
            openModal: false,
            eventIndex: '',
            modalChild: null,
            viewentergrates: false,
            apiError: false,
            contactForm: {
                to: '',
                subject: '',
                message: ''
            }
        };
        this.toggleExpand = this.toggleExpand.bind(this);
        this.toggleShowMore = this.toggleShowMore.bind(this);
        this.onModify = this.onModify.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.onViewentergrates = this.onViewentergrates.bind(this);
        this.onContactFormChange = this.onContactFormChange.bind(this);
        this.onContact = this.onContact.bind(this);
        this.onContactMessageSend = this.onContactMessageSend.bind(this);
    }

    toggleExpand() {
        this.setState({ expand: !this.state.expand }, () => {
            if (this.state.expand) {
                this.props
                    .getEvents(this.props.userId)
                    .then(res =>
                        this.setState({ dataLoaded: true, apiError: !res })
                    );
            } else {
                this.setState({ dataLoaded: false });
            }
        });
    }

    toggleShowMore(id) {
        const { showMore } = this.state;
        if (id === showMore) {
            this.setState({ showMore: '', viewentergrates: false });
        } else {
            this.setState({ showMore: id, viewentergrates: false });
        }
    }

    onModify(i) {
        this.setState({ eventIndex: i });
        this.toggleModal('modifyEvent');
    }

    onViewentergrates() {
        this.setState({ viewentergrates: !this.state.viewentergrates });
    }

    toggleModal(type) {
        // toggle different modal type
        this.setState(state => modalAction(state, type));
    }

    onContactFormChange(name, txt) {
        const { contactForm } = this.state;
        contactForm[name] = txt;
        this.setState({ contactForm });
    }

    onContact(toAll, toEmail) {
        const { contactForm } = this.state;
        if (toAll) {
            contactForm.to = toAll.map(ent => ent.email).join(', ');
        } else {
            contactForm.to = toEmail;
        }
        this.setState({
            contactForm
        });
        this.toggleModal('contactForm');
    }

    onContactMessageSend() {
        this.props
            .contact(this.state.contactForm)
            .then(res => res === 200 && this.toggleModal());
    }

    render() {
        const {
            modalChild,
            openModal,
            expand,
            dataLoaded,
            showMore,
            apiError
        } = this.state;
        return (
            <CollapseSection
                name="Events"
                expand={expand}
                dataLoaded={dataLoaded}
                toggleExpand={this.toggleExpand}
            >
                <div>
                    {openModal ? (
                        <Modal close={this.toggleModal}>
                            <div>
                                {modalChild === 'newEvent' ? (
                                    <EventForm closeForm={this.toggleModal} />
                                ) : null}
                                {modalChild === 'modifyEvent' ? (
                                    <EventForm
                                        modify
                                        closeForm={this.toggleModal}
                                        eventData={
                                            this.props.events[
                                                this.state.eventIndex
                                            ]
                                        }
                                    />
                                ) : null}
                                {modalChild === 'contactForm' ? (
                                    <ContactForm
                                        formData={this.state.contactForm}
                                        onChange={this.onContactFormChange}
                                        submit={this.onContactMessageSend}
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
                                    onViewentergrates={this.onViewentergrates}
                                    viewentergrates={this.state.viewentergrates}
                                    onContact={this.onContact}
                                />
                            ))}
                        </div>
                        {apiError && (
                            <div>
                                <h5>API Error</h5>
                            </div>
                        )}
                        <div className="section-cta">
                            <Button
                                title="Add new"
                                onClick={() => this.toggleModal('newEvent')}
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
    contact: PropTypes.func.isRequired
};

function mapStateToProps({ authentication, events }) {
    return {
        userId: authentication.userData._id,
        events: events.events
    };
}

export default connect(
    mapStateToProps,
    { getEvents, contact }
)(Events);
