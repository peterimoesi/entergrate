import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../components/buttons';
import DefaultInput from '../../components/defaultInput';
import { Link } from 'react-router-dom';

import { onLogin } from './action';
import './styles.scss';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    formSubmit() {
        const { state } = this.props.location;
        this.props.onLogin(this.state, state && state.referrer);
    }

    onKeyDown(e) {
        if (e.keyCode === 13) {
            this.formSubmit();
        }
    }

    render() {
        return (
            <div className="container">
                <div id="login-form">
                    <div
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        <span>Log in with </span>
                        <a
                            href="/api/users/auth/facebook"
                            className="btn btn-secondary button entergrate-btn"
                            style={{
                                textTransform: 'lowercase'
                            }}
                        >
                            facebook <i className="fa fa-facebook" />
                        </a>
                    </div>
                    <DefaultInput
                        noIcon
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        label="Email"
                        onChange={this.onChange}
                        value={this.state.email}
                        formType="input"
                        onKeyDown={this.onKeyDown}
                    />
                    <DefaultInput
                        noIcon
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        label="Password"
                        onChange={this.onChange}
                        value={this.state.password}
                        formType="input"
                        onKeyDown={this.onKeyDown}
                    />
                    <div className="login-final-cta">
                        <Button
                            title="Login"
                            type="primary"
                            onClick={this.formSubmit}
                        />
                    </div>
                    <div
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        You don{'\''}t have an account ? Sign up{' '}
                        <Link to="/apply/for-entergrates">here</Link>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
};

export default connect(
    null,
    { onLogin }
)(Login);
