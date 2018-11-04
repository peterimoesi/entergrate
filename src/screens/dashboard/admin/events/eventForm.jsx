import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DefaultInput from '../../../../components/defaultInput';
import Button from '../../../../components/buttons';
import validation from '../../../../utils/validation';

import { submit } from './actions';
import './styles.scss';

class EventForm extends React.Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.onQuillChange = this.onQuillChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.submit = this.submit.bind(this);
        this.getFormChanges = this.getFormChanges.bind(this);
        this.state = {
            eventId: null,
            error: {},
            eventData: {
                businessName: '',
                url: '',
                description: '',
                location: '',
                dateTime: new Date(),
                name: '',
                image: ''
            }
        };
    }
    componentDidMount() {
        if (this.props.modify) {
            const {
                _id,
                businessName,
                url,
                description,
                location,
                name,
                dateTime
            } = this.props.eventData;
            this.setState({
                eventData: {
                    _id,
                    businessName,
                    url,
                    description,
                    location,
                    name,
                    dateTime: new Date(dateTime)
                }
            });
        }
    }

    onChange(e) {
        const { eventData } = this.state;
        eventData[e.target.name] = e.target.value;
        this.setState({ eventData });
    }

    onQuillChange(value) {
        const { eventData } = this.state;
        eventData.description = value;
        this.setState({ eventData });
    }

    onDateChange(e) {
        const { eventData } = this.state;
        eventData.dateTime = e._d;
        this.setState({ eventData });
    }

    handleUpload(e) {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = e => {
            const { eventData } = this.state;
            eventData.image = e.target.result;
            this.setState({ eventData });
        };
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    getFormChanges() {
        // check which fields are different
        const { eventData } = this.state,
            defaultEventData = this.props.eventData,
            eventKeys = Object.keys(eventData),
            updatedKeys = {};
        for (let i of eventKeys) {
            if (eventData[i] !== defaultEventData[i]) {
                updatedKeys[i] = eventData[i];
            }
        }
        updatedKeys._id = this.state.eventData._id;
        return updatedKeys;
    }

    validateChanges() {
        const { eventData } = this.state;
        const formChanges = Object.keys(eventData);
        const { error } = this.state;
        for (let key of formChanges) {
            if (validation[key]) {
                error[key] = validation[key](eventData[key]);
            } else {
                error[key] = validation['others'](eventData[key]);
            }
        }
        this.setState({ error });
    }

    submit() {
        this.validateChanges();
        // check for errors
        const { error } = this.state,
            errorKeys = Object.keys(error);
        for (let key of errorKeys) {
            if (error[key]) {
                return;
            }
        }

        this.props
            .submit(
                this.props.modify
                    ? this.getFormChanges()
                    : this.state.eventData,
                this.props.userId,
                this.props.modify
            )
            .then(res => res === 200 && this.props.closeForm());
    }

    render() {
        const { eventData, error } = this.state;
        return (
            <div className="event-form">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12 new-event-input">
                        <DefaultInput
                            onChange={this.onChange}
                            label="Event name"
                            value={eventData.name}
                            placeholder="Event name"
                            name="name"
                            noIcon
                            type="text"
                            formType="input"
                            error={error.name}
                        />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 new-event-input">
                        <DefaultInput
                            onChange={this.onChange}
                            label="Company website"
                            value={eventData.url}
                            placeholder="Company website"
                            name="url"
                            noIcon
                            type="text"
                            formType="input"
                            error={error.url}
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 new-event-input">
                        <DefaultInput
                            onChange={this.onChange}
                            label="Company name"
                            value={eventData.businessName}
                            placeholder="Company name"
                            name="businessName"
                            noIcon
                            type="text"
                            formType="input"
                            style={{ height: '44px' }}
                            error={error.businessName}
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 new-event-input">
                        <div>
                            <label>Upload Event image : </label>
                            <div>
                                <input
                                    type="file"
                                    name="image"
                                    className="form-control"
                                    accept="image/*"
                                    id="fileUpload"
                                    onChange={this.handleUpload}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 new-event-input">
                        <DefaultInput
                            onChange={this.onDateChange}
                            label="Event date"
                            value={eventData.dateTime || ''}
                            placeholder="DD-MM-YYYY"
                            name="date"
                            formType="dateTime"
                            noIcon
                            error={error.dateTime}
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 new-event-input">
                        <DefaultInput
                            onChange={this.onChange}
                            label="Event location"
                            value={eventData.location}
                            placeholder="Event location"
                            name="location"
                            type="text"
                            formType="input"
                            error={error.location}
                            noIcon
                        />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 new-event-input">
                        <DefaultInput
                            onChange={this.onQuillChange}
                            label="Event description"
                            value={eventData.description}
                            placeholder="Event description"
                            name="description"
                            formType="exTextArea"
                            error={error.description}
                            noIcon
                        />
                    </div>
                </div>
                <div className="section-cta-right">
                    <Button title="Save" onClick={this.submit} type="primary" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ authentication }) => ({
    userId: authentication.userData._id
});

EventForm.propTypes = {
    submit: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    closeForm: PropTypes.func.isRequired,
    modify: PropTypes.bool,
    eventData: PropTypes.object
};

EventForm.defaultProps = {
    modify: false,
    eventData: null
};

export default connect(
    mapStateToProps,
    { submit }
)(EventForm);
