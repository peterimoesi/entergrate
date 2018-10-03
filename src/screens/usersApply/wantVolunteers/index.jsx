import React from 'react';
import PropTypes from 'prop-types';
import ScrollFormInput from '../../../components/scrollInputs';
import Button from '../../../components/buttons';

class NeedVolunteers extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName : '',
            email : '',
            address : '',
            phoneNumber : '',
            password : '',
            profileImg : '',
            bio : '',
            requirements : [],
            eventDescription : '',
            eventLocation : '',
            eventName : '',
            eventArtwork : ''
        };
        this.onChange = this.onChange.bind(this);
        this.addToList = this.addToList.bind(this);
        this.removeFromList = this.removeFromList.bind(this);
        this.handleListChange = this.handleListChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    handleListChange(e, i, name) {
        const array = this.state[name];
        array[i] = e;
        this.setState({ array });

    }

    addToList(name) {
        const array = this.state[name];
        array.push('');
        this.setState({ name : array });
    }

    removeFromList(name, i) {
        const array = this.state[name];
        array.splice(i, 1);
        this.setState({ name : array });
    }

    render () {
        const {
            fullName,
            email,
            address,
            phoneNumber,
            password,
            bio,
            requirements,
            eventDescription,
            eventLocation,
            eventName
        } = this.state;
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
                    onChange={this.onChange}
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
                    onChange={this.onChange}
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
                    onChange={this.onChange}
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
                    onChange={this.onChange}
                    name="address"
                    value={address}
                    type="text"
                    onKeyDown={this.props.onEnterClick}
                >
                    <div>Your contact address, city and country</div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={5}
                    onChange={this.onChange}
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
                    onChange={this.onChange}
                    onClick={this.props.onInputClick}
                    name="bio"
                    value={bio}
                    type="text"
                    inputType="textarea"
                >
                    <div>Describe your oraganisation in a few words or drop a link to your website</div>
                </ScrollFormInput>
                <div className="pre-form-info">
                    <div>Nom complete the form below to describe your event. </div>
                </div>
                <ScrollFormInput
                    number={7}
                    onChange={this.onChange}
                    onClick={this.props.onInputClick}
                    name="eventName"
                    value={eventName}
                    type="text"
                    onKeyDown={this.props.onEnterClick}
                >
                    <div>The namne of the event</div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={8}
                    onChange={this.onChange}
                    onClick={this.props.onInputClick}
                    name="eventLocation"
                    value={eventLocation}
                    type="text"
                    onKeyDown={this.props.onEnterClick}
                >
                    <div>Location of the event if it different from the one above</div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={9}
                    onChange={this.onChange}
                    onClick={this.props.onInputClick}
                    name="eventDescription"
                    value={eventDescription}
                    type="text"
                    inputType="textarea"
                >
                    <div>Describe your event or simply drop the link to the event website</div>
                </ScrollFormInput>
                <ScrollFormInput
                    number={10}
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
                <div>
                    <Button
                        title="Apply"
                        onClick={() =>  null}
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
    onEnterClick : PropTypes.func.isRequired
};

export default NeedVolunteers ;
