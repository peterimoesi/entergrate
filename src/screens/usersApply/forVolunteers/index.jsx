import React from 'react';
import PropTypes from 'prop-types';
import ScrollFormInput from '../../../components/scrollInputs';
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
                <ScrollFormInput
                    number={1}
                    onChange={this.onChange}
                    onClick={this.props.onInputClick}
                    name="fullName"
                    value={fullName}
                    type="text"
                    onKeyDown={this.props.onEnterClick}
                >
                    <div>
                        <div>Please provide your fullname here</div>
                        <div>Your name will be displayed along with your profile</div>
                    </div>
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
                    <div>
                        <div>Enter your email address</div>
                        <div>Your email along with your secure password will be required for login</div>
                    </div>
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
                    <div>Say a few worlds about yourself. Let organiations know who your are.</div>
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

ForVolunteers.propTypes = {
    setRef : PropTypes.func.isRequired,
    onInputClick : PropTypes.func.isRequired,
    onEnterClick : PropTypes.func.isRequired
};

export default ForVolunteers ;
