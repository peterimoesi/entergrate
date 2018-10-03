import React from 'react';

import Button from '../../components/buttons';
import DefaultInput from '../../components/defaultInput';
import './styles.scss';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email : '',
            password : ''
        };
        this.onChange = this.onChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    formSubmit() {
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <div id="login-form">
                    <DefaultInput
                        noIcon
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        label="Email"
                        onChange={this.onChange}
                        value={this.state.email}
                    />
                    <DefaultInput
                        noIcon
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        label="Password"
                        onChange={this.onChange}
                        value={this.state.password}
                    />
                    <div className="login-final-cta">
                        <Button
                            title="Login"
                            type="primary"
                            onClick={this.formSubmit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
