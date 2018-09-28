import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../../components/formInputs/textInput';
import TextArea from '../../../components/formInputs/textArea';
import Button from '../../../components/buttons';

class ForVolunteers extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName : '',
            email : '',
            address : '',
            phoneNumber : '',
            password : '',
            bio : ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    render () {
        const {
            fullName,
            email,
            address,
            phoneNumber,
            password,
            bio
        } = this.state;
        return (
            <div className="form-container" ref={this.props.setRef}>
                <div className="pre-form-info">
                    <div>Fill the form below to create your profile. </div>
                    <div>
                        <span>Click </span>
                        <Button
                            title="here"
                            onClick={() =>  null}
                            type="secondary"
                        />
                        <span> to view the list of available positions</span>
                    </div>
                </div>
                <TextInput
                    number={1}
                    onChange={this.onChange}
                    onClick={this.props.onInputClick}
                    name="fullName"
                    value={fullName}
                    type="text"
                    onKeyDown={this.props.onEnterClick}
                >
                    <div>Please provide your fullname here</div>
                    <div>Your name will be displayed along with your profile</div>
                </TextInput>
                <TextInput
                    number={2}
                    onChange={this.onChange}
                    onClick={this.props.onInputClick}
                    name="email"
                    value={email}
                    type="email"
                    onKeyDown={this.props.onEnterClick}
                >
                    <div>Enter your email address</div>
                    <div>Your email along with your secure password will be required for login</div>
                </TextInput>
                <TextInput
                    number={3}
                    onChange={this.onChange}
                    onClick={this.props.onInputClick}
                    name="password"
                    value={password}
                    type="password"
                    onKeyDown={this.props.onEnterClick}
                >
                    <div>Enter your secure password here.</div>
                    <div>Please note that Entergrate will never ask you for your login information</div>
                </TextInput>
                <TextInput
                    number={4}
                    onClick={this.props.onInputClick}
                    onChange={this.onChange}
                    name="address"
                    value={address}
                    type="text"
                    onKeyDown={this.props.onEnterClick}
                >
                    <div>Your contact address, city and country</div>
                </TextInput>
                <TextInput
                    number={5}
                    onChange={this.onChange}
                    onClick={this.props.onInputClick}
                    name="phoneNumber"
                    value={phoneNumber}
                    onKeyDown={this.props.onEnterClick}
                    type="text"
                >
                    <div>Please enter your phone number along with the country code</div>
                </TextInput>
                <TextArea
                    number={6}
                    onChange={this.onChange}
                    onClick={this.props.onInputClick}
                    name="bio"
                    value={bio}
                    type="text"
                >
                    <div>Say a few worlds about yourself. Let organiations know who your are.</div>
                </TextArea>
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

ForVolunteers.propTypes = {
    setRef : PropTypes.func.isRequired,
    onInputClick : PropTypes.func.isRequired,
    onEnterClick : PropTypes.func.isRequired
};

export default ForVolunteers ;
