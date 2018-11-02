import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrollFormInput from '../../../components/scrollInputs';
import Button from '../../../components/buttons';
import FileUpload from '../../../components/scrollInputs/upload';
import Validation from '../../../utils/validation';

import { apply } from './actions';

class NeedVolunteers extends React.Component {
    constructor() {
        super();
        this.state = {
            error: {},
            userData: {
                userGroup: 2,
                fullName: '',
                email: '',
                address: '',
                phoneNumber: '',
                password: '',
                personalUrl: '',
                bio: ''
            },
            eventData: {
                requirements: [],
                description: '',
                dateTime: '',
                location: '',
                name: '',
                image: ''
            }
        };
        this.onUserChange = this.onUserChange.bind(this);
        this.onEventChange = this.onEventChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.addToList = this.addToList.bind(this);
        this.removeFromList = this.removeFromList.bind(this);
        this.handleListChange = this.handleListChange.bind(this);
        this.apply = this.apply.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    onUserChange(e) {
        const { userData } = this.state;
        userData[e.target.name] = e.target.value;
        this.setState({ userData });
    }

    onEventChange(e) {
        const { eventData } = this.state;
        eventData[e.target.name] = e.target.value;
        this.setState({ eventData });
    }

    onDateChange(e) {
        const { eventData } = this.state;
        eventData.dateTime = e._d;
        this.setState({ eventData });
    }

    handleListChange(e, i, name) {
        const { eventData } = this.state;
        eventData[name][i] = e;
        this.setState({ eventData });
    }

    addToList(name) {
        const { eventData } = this.state;
        eventData[name].push('');
        this.setState({ eventData });
    }

    removeFromList(name, i) {
        const { eventData } = this.state;
        eventData[name].splice(i, 1);
        this.setState({ eventData });
    }

    validateChanges() {
        const object = { ...this.state.userData, ...this.state.eventData };
        const formChanges = Object.keys(object);
        const { error } = this.state;
        for (let key of formChanges) {
            if (key === 'name') {
                error[key] = Validation.fullName(object[key]);
            } else if (Validation[key]) {
                error[key] = Validation[key](object[key]);
            } else if (key !== 'image' && key !== 'userGroup') {
                error[key] = Validation['others'](object[key]);
            }
        }
        this.setState({ error });
    }

    handleUpload(e, name) {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = e => {
            const data = this.state[name];
            data.image = e.target.result;
            this.setState({ [name]: data });
        };
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    apply() {
        this.validateChanges();
        // check for errors
        const { error } = this.state,
            errorKeys = Object.keys(error);
        for (let key of errorKeys) {
            if (error[key]) {
                return;
            }
        }
        this.props.apply(this.state.userData, this.state.eventData);
    }

    render() {
        const {
            fullName,
            email,
            address,
            phoneNumber,
            password,
            bio,
            personalUrl
        } = this.state.userData;
        const {
            requirements,
            description,
            location,
            name,
            dateTime
        } = this.state.eventData;
        return (
            <div className="form-container" ref={this.props.setRef}>
                <div className="pre-form-info initial">
                    <div>Fill the form below to create your profile. </div>
                    <div>
                        <span>Click </span>
                        <Button
                            title="here"
                            onClick={() => null}
                            type="secondary"
                        />
                        <span>
                            {' '}
                            to view the list of open volunteers in your location
                        </span>
                    </div>
                </div>
                <ScrollFormInput
                    number={1}
                    onChange={this.onUserChange}
                    onClick={this.props.onInputClick}
                    name="fullName"
                    value={fullName}
                    type="text"
                    onKeyDown={this.props.onEnterClick}
                    error={this.state.error.fullName}
                >
                    <div>Name of your Organisation</div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={2}
                    onChange={this.onUserChange}
                    onClick={this.props.onInputClick}
                    name="email"
                    value={email}
                    type="email"
                    onKeyDown={this.props.onEnterClick}
                    error={this.state.error.email}
                >
                    <div>Enter your business/contact email address</div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={3}
                    onChange={this.onUserChange}
                    onClick={this.props.onInputClick}
                    name="password"
                    value={password}
                    type="password"
                    onKeyDown={this.props.onEnterClick}
                    error={this.state.error.password}
                >
                    <div>
                        <div>Enter your secure password here.</div>
                        <div>
                            Please note that Entergrate will never ask you for
                            your login information
                        </div>
                    </div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={4}
                    onClick={this.props.onInputClick}
                    onChange={this.onUserChange}
                    name="address"
                    value={address}
                    type="text"
                    onKeyDown={this.props.onEnterClick}
                    error={this.state.error.address}
                >
                    <div>Your contact address, city and country</div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={5}
                    onChange={this.onUserChange}
                    onClick={this.props.onInputClick}
                    name="phoneNumber"
                    value={phoneNumber}
                    onKeyDown={this.props.onEnterClick}
                    error={this.state.error.phoneNumber}
                    type="text"
                >
                    <div>
                        Please enter your phone number along with the country
                        code
                    </div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={6}
                    onChange={this.onUserChange}
                    onClick={this.props.onInputClick}
                    name="personalUrl"
                    value={personalUrl}
                    onKeyDown={this.props.onEnterClick}
                    error={this.state.error.personalUrl}
                    type="text"
                >
                    <div>
                        Please enter the Url to your public profile. e.g
                        LinkedIn
                    </div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={7}
                    onChange={this.onUserChange}
                    onClick={this.props.onInputClick}
                    name="bio"
                    value={bio}
                    type="text"
                    inputType="textarea"
                    error={this.state.error.bio}
                    maxLength={240}
                >
                    <div>
                        Describe your organisation in a few words (240) -{' '}
                        <span>{240 - parseInt(bio.length)}</span>
                    </div>
                </ScrollFormInput>
                <div className="pre-form-info">
                    <div>
                        Now complete the form below to describe your event.{' '}
                    </div>
                </div>
                <ScrollFormInput
                    number={8}
                    onChange={this.onEventChange}
                    onClick={this.props.onInputClick}
                    name="name"
                    value={name}
                    type="text"
                    onKeyDown={this.props.onEnterClick}
                    error={this.state.error.name}
                >
                    <div>The name of the event</div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={8}
                    onChange={this.onDateChange}
                    value={dateTime}
                    type="text"
                    inputType="dateTime"
                    placeholder="DD-MM-YYYY"
                    onKeyDown={this.props.onEnterClick}
                    error={this.state.error.dateTime}
                >
                    <div>The date and time of the event</div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={9}
                    onChange={this.onEventChange}
                    onClick={this.props.onInputClick}
                    name="location"
                    value={location}
                    type="text"
                    onKeyDown={this.props.onEnterClick}
                    error={this.state.error.location}
                >
                    <div>
                        Location of the event if it different from the one above
                    </div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={10}
                    onChange={this.onEventChange}
                    onClick={this.props.onInputClick}
                    name="description"
                    value={description}
                    type="text"
                    inputType="textarea"
                    error={this.state.error.description}
                >
                    <div>
                        Describe your event or simply drop the link to the event
                        website
                    </div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={11}
                    onChange={this.handleListChange}
                    onClick={this.props.onInputClick}
                    addToList={this.addToList}
                    removeFromList={this.removeFromList}
                    name="requirements"
                    value={requirements}
                    type="text"
                    inputType="formList"
                    error={this.state.error.requirements}
                >
                    <div>List the requirements needed for this position</div>
                </ScrollFormInput>
                <FileUpload
                    number={12}
                    onUpload={e => this.handleUpload(e, 'eventData')}
                    onClick={this.props.onInputClick}
                    name="profileImage"
                >
                    <div>Upload your Event picture</div>
                </FileUpload>
                <div>
                    <Button
                        title="Apply"
                        onClick={this.apply}
                        size="xl"
                        type="primary"
                    />
                </div>
            </div>
        );
    }
}

NeedVolunteers.propTypes = {
    setRef: PropTypes.func.isRequired,
    onInputClick: PropTypes.func.isRequired,
    onEnterClick: PropTypes.func.isRequired,
    apply: PropTypes.func.isRequired
};

export default connect(
    null,
    { apply }
)(NeedVolunteers);
