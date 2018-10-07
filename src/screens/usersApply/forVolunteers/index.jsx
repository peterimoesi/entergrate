import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrollFormInput from '../../../components/scrollInputs';
import FileUpload from '../../../components/scrollInputs/upload';
import Button from '../../../components/buttons';

import { apply } from './actions';

class ForVolunteers extends React.Component {
    constructor() {
        super();
        this.state = {
            userGroup : 1,
            fullName : '',
            email : '',
            address : '',
            phoneNumber : '',
            password : '',
            bio : '',
            image :''
        };
        this.onChange = this.onChange.bind(this);
        this.apply = this.apply.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    handleUpload(e) {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = (e) => {
            this.setState({ image : e.target.result });
        };
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    apply() {
        this.props.apply(this.state);
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
                <FileUpload
                    number={6}
                    onUpload={this.handleUpload}
                    onClick={this.props.onInputClick}
                    name="profileImage"
                >
                    <div>Upload your profile picture</div>
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

ForVolunteers.propTypes = {
    setRef : PropTypes.func.isRequired,
    onInputClick : PropTypes.func.isRequired,
    onEnterClick : PropTypes.func.isRequired,
    apply : PropTypes.func.isRequired
};

export default connect(null, { apply })(ForVolunteers) ;
