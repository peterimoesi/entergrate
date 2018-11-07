import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ScrollFormInput from '../../../components/scrollInputs';
import Button from '../../../components/buttons';
import Validation from '../../../utils/validation';

import { apply } from './actions';

class ForEntergrates extends React.Component {
    constructor() {
        super();
        this.state = {
            error: {},
            userGroup: 1,
            fullName: '',
            email: '',
            address: '',
            phoneNumber: '',
            password: '',
            url: '',
            bio: ''
        };
        this.onChange = this.onChange.bind(this);
        this.apply = this.apply.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    validateChanges() {
        const formChanges = [
            'fullName',
            'email',
            'address',
            'phoneNumber',
            'password',
            'bio',
            'url'
        ];

        const { error } = this.state;
        for (let key of formChanges) {
            if (Validation[key]) {
                error[key] = Validation[key](this.state[key]);
            } else {
                error[key] = Validation['others'](this.state[key]);
            }
        }
        this.setState({ error });
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
        this.props.apply(this.state);
    }

    render() {
        const {
            fullName,
            email,
            address,
            phoneNumber,
            password,
            bio,
            url
        } = this.state;
        return (
            <form>
                <div className="form-container" ref={this.props.setRef}>
                    <div className="pre-form-info">
                        <div>Fill the form below to create your profile. </div>
                        <div>
                            <span>Click </span>
                            <Link to="/open-events">
                                <Button
                                    title="here"
                                    onClick={() => null}
                                    type="secondary"
                                />
                            </Link>
                            <span>
                                {' '}
                                to view the list of available positions
                            </span>
                        </div>
                    </div>
                    <ScrollFormInput
                        number={1}
                        onChange={this.onChange}
                        onClick={this.props.onInputClick}
                        name="fullName"
                        value={fullName}
                        type="text"
                        autocomplete="name"
                        onKeyDown={this.props.onEnterClick}
                        error={this.state.error.fullName}
                    >
                        <div>
                            <div>Please provide your fullname here</div>
                            <div>
                                Your name will be displayed along with your
                                profile
                            </div>
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
                        error={this.state.error.email}
                    >
                        <div>
                            <div>Enter your email address</div>
                            <div>
                                Your email along with your secure password will
                                be required for login
                            </div>
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
                        error={this.state.error.password}
                    >
                        <div>
                            <div>Enter your secure password here.</div>
                            <div>
                                Please note that Entergrate will never ask you
                                for your login information
                            </div>
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
                        error={this.state.error.address}
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
                        error={this.state.error.phoneNumber}
                        type="text"
                        autocomplete="tel"
                    >
                        <div>
                            Please enter your phone number along with the
                            country code
                        </div>
                    </ScrollFormInput>
                    <ScrollFormInput
                        number={6}
                        onChange={this.onChange}
                        onClick={this.props.onInputClick}
                        name="url"
                        value={url}
                        onKeyDown={this.props.onEnterClick}
                        error={this.state.error.url}
                        type="text"
                    >
                        <div>
                            Please enter the Url to your public profile. e.g
                            LinkedIn
                        </div>
                    </ScrollFormInput>
                    <ScrollFormInput
                        number={7}
                        onChange={this.onChange}
                        onClick={this.props.onInputClick}
                        name="bio"
                        value={bio}
                        type="text"
                        inputType="textarea"
                        error={this.state.error.bio}
                        maxLength={240}
                    >
                        <div>
                            Say a few worlds (240) about yourself. Let
                            organiations know who your are. -{' '}
                            <span>{240 - parseInt(bio.length)}</span>
                        </div>
                    </ScrollFormInput>
                    <div>
                        <Button
                            title="Apply"
                            onClick={this.apply}
                            size="xl"
                            type="primary"
                        />
                    </div>
                </div>
            </form>
        );
    }
}

ForEntergrates.propTypes = {
    setRef: PropTypes.func.isRequired,
    onInputClick: PropTypes.func.isRequired,
    onEnterClick: PropTypes.func.isRequired,
    apply: PropTypes.func.isRequired
};

export default connect(
    null,
    { apply }
)(ForEntergrates);
