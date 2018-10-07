import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrollFormInput from '../../../components/scrollInputs';
import Button from '../../../components/buttons';
import FileUpload from '../../../components/scrollInputs/upload';

import { apply } from './actions';

class NeedVolunteers extends React.Component {
    constructor() {
        super();
        this.state = {
            userData : {
                userGroup : 2,
                fullName : '',
                email : '',
                address : '',
                phoneNumber : '',
                password : '',
                image : '',
                bio : '',
            },
            eventData : {
                requirements : [],
                description : '',
                startDate : '',
                time : '',
                location : '',
                name : '',
                image : ''
            }
        };
        this.onUserChange = this.onUserChange.bind(this);
        this.onEventChange = this.onEventChange.bind(this);
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

    handleUpload(e, name) {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = this.state[name];
            data.image = e.target.result;
            this.setState({ [name] : data });
        };
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    apply() {
        this.props.apply(this.state.userData, this.state.eventData);
    }

    render () {
        const {
            fullName,
            email,
            address,
            phoneNumber,
            password,
            bio
        } = this.state.userData;
        const {
            requirements,
            description,
            location,
            name,
            date,
            time
        } = this.state.eventData;
        return (
            <div className="form-container" ref={this.props.setRef}>
                <div className="pre-form-info initial">
                    <div>Fill the form below to create your profile. </div>
                    <div>
                        <span>Click </span>
                        <Button
                            title="here"
                            onClick={() =>  null}
                            type="secondary"
                        />
                        <span> to view the list of open volunteers in your location</span>
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
                >
                    <div>
                        <div>Enter your secure password here.</div>
                        <div>Please note that Entergrate will never ask you for your login information</div>
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
                    type="text"
                >
                    <div>Please enter your phone number along with the country code</div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={6}
                    onChange={this.onUserChange}
                    onClick={this.props.onInputClick}
                    name="bio"
                    value={bio}
                    type="text"
                    inputType="textarea"
                >
                    <div>Describe your oraganisation in a few words or drop a link to your website</div>
                </ScrollFormInput>
                <FileUpload
                    number={7}
                    onUpload={e => this.handleUpload(e, 'userData')}
                    onClick={this.props.onInputClick}
                    name="profileImage"
                >
                    <div>Upload your Business picture</div>
                </FileUpload>
                <div className="pre-form-info">
                    <div>Nom complete the form below to describe your event. </div>
                </div>
                <ScrollFormInput
                    number={8}
                    onChange={this.onEventChange}
                    onClick={this.props.onInputClick}
                    name="name"
                    value={name}
                    type="text"
                    onKeyDown={this.props.onEnterClick}
                >
                    <div>The name of the event</div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={8}
                    onChange={this.onEventChange}
                    onClick={this.props.onInputClick}
                    name="date"
                    value={date}
                    type="text"
                    placeholder="DD-MM-YYYY"
                    onKeyDown={this.props.onEnterClick}
                >
                    <div>The date of the event</div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={8}
                    onChange={this.onEventChange}
                    onClick={this.props.onInputClick}
                    name="time"
                    value={time}
                    type="text"
                    onKeyDown={this.props.onEnterClick}
                >
                    <div>The time of event in am or pm</div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={9}
                    onChange={this.onEventChange}
                    onClick={this.props.onInputClick}
                    name="location"
                    value={location}
                    type="text"
                    onKeyDown={this.props.onEnterClick}
                >
                    <div>Location of the event if it different from the one above</div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={10}
                    onChange={this.onEventChange}
                    onClick={this.props.onInputClick}
                    name="description"
                    value={description}
                    type="text"
                    inputType="textarea"
                >
                    <div>Describe your event or simply drop the link to the event website</div>
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
    setRef : PropTypes.func.isRequired,
    onInputClick : PropTypes.func.isRequired,
    onEnterClick : PropTypes.func.isRequired,
    apply : PropTypes.func.isRequired
};

export default connect(null, { apply })(NeedVolunteers) ;
