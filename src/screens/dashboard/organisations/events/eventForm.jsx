import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DefaultInput from '../../../../components/defaultInput';
import Button from '../../../../components/buttons';

import { submit } from './actions';
import './styles.scss';

class EventForm extends React.Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            eventData : {
                requirements : [],
                description : '',
                location : '',
                date : '',
                time : '',
                name : '',
                image : ''
            }
        };
    }
    componentDidMount() {
        if (this.props.modify) {
            this.setState({ eventData : this.props.eventData });
        }
    }

    onChange(e) {
        const { eventData } = this.state;
        eventData[e.target.name] = e.target.value;
        this.setState({ eventData });
    }

    handleListChange(e, i) {
        const { eventData } = this.state;
        eventData.requirements[i] = e;
        this.setState({ eventData });
    }

    addToList() {
        const { eventData } = this.state;
        eventData.requirements.push('');
        this.setState({ eventData });
    }

    removeFromList(i) {
        const { eventData } = this.state;
        eventData.requirements.splice(i, 1);
        this.setState({ eventData });
    }

    handleUpload(e) {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = (e) => {
            const { eventData } = this.state;
            eventData.image = e.target.result;
            this.setState({ eventData });
        };
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    submit() {
        this.props.submit(this.state.eventData, this.props.userId)
            .then(res => res === 200 && this.props.closeForm());
    }

    render() {
        const { eventData } = this.state;
        return (
            <div className="event-form">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 new-event-input">
                        <DefaultInput
                            onChange={this.onChange}
                            label="Event name"
                            value={eventData.name}
                            placeholder="Event name"
                            name="name"
                            noIcon
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 new-event-input">
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
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 new-event-input">
                        <DefaultInput
                            onChange={this.onChange}
                            label="Event date"
                            value={eventData.date}
                            placeholder="DD-MM-YYYY"
                            name="date"
                            noIcon
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 new-event-input">
                        <DefaultInput
                            onChange={this.onChange}
                            label="Event time"
                            value={eventData.time}
                            placeholder="12:30 am - 3:30pm"
                            name="time"
                            noIcon
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 new-event-input">
                        <DefaultInput
                            onChange={this.onChange}
                            label="Event location"
                            value={eventData.location}
                            placeholder="Event location"
                            name="location"
                            noIcon
                        />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 new-event-input">
                        <DefaultInput
                            onChange={this.onChange}
                            label="Event description"
                            value={eventData.description}
                            placeholder="Event description"
                            name="description"
                            type="textArea"
                            noIcon
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 new-event-input">
                        <div>
                            <label>Add volunteer requirements</label>
                            {
                                eventData.requirements.map((req, i) => (
                                    <div key={i} className="requirement-input">
                                        <input
                                            className="form-control"
                                            onChange={e => this.handleListChange(e.target.value, i)}
                                            value={req}
                                        />
                                        <i
                                            className="fa fa-close"
                                            onClick={() => {
                                                this.removeFromList(i);
                                            }}
                                            role="button"
                                            tabIndex="0"
                                        />
                                    </div>
                                ))
                            }
                            <div>
                                <Button
                                    title="Add new +"
                                    onClick={() => this.addToList()}
                                    type="secondary"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-cta-right">
                    <Button
                        title="Save"
                        onClick={this.submit}
                        type="primary"
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ authentication }) => ({
    userId : authentication.userData._id
});

EventForm.propTypes = {
    submit : PropTypes.func.isRequired,
    userId : PropTypes.string.isRequired,
    closeForm : PropTypes.func.isRequired,
    modify : PropTypes.bool,
    eventData : PropTypes.object
};

EventForm.defaultProps = {
    modify : false,
    eventData : null
};

export default connect(mapStateToProps, { submit })(EventForm);
