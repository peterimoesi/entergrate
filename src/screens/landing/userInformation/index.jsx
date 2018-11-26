import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

import history from '../../../routes/history';
import Button from '../../../components/buttons';

import './styles.scss';

function rerunTypist(state) {
    return {
        running: !state.running
    };
}

class UserInformation extends React.Component {
    constructor() {
        super();
        this.state = {
            running: true
        };
        this.timeout = null;
        this.onReRunTypist = this.onReRunTypist.bind(this);
    }

    onReRunTypist() {
        this.timeout = setTimeout(() => {
            this.setState((state, props) => rerunTypist(state, props));
            this.setState((state, props) => rerunTypist(state, props));
        }, 60000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const { userGroup } = this.props;
        return (
            <header id="beEntergrate">
                <div className="container">
                    <div className="user-info user-info-show">
                        <div>
                            <h2 className="section-heading text-uppercase">
                                {this.state.running && (
                                    <Typist
                                        cursor={{
                                            show: false
                                        }}
                                        onTypingDone={this.onReRunTypist}
                                    >
                                        <span style={{ visibility: 'hidden' }}>
                                            {'"'}
                                        </span>
                                        <span>Want to b</span>
                                        <Typist.Backspace
                                            count={9}
                                            delay={800}
                                        />
                                        <span>Become an Entergrater</span>
                                    </Typist>
                                )}
                            </h2>
                            <p className="text-muted">
                                Entergrate is a social enterprise established in
                                May 2018 in Finland. Entergrate as an
                                organization wants to create a professional
                                inclusiveness of immigrants in the society, so
                                that they can add value to the professional
                                lives of the society and themselves.
                            </p>
                        </div>
                        <div className="user-group-cta">
                            <Button
                                title="Apply now"
                                type="primary"
                                size="xl"
                                onClick={() =>
                                    history.push(
                                        `/apply${
                                            userGroup === 1 ? '/for' : '/want'
                                        }-entergrates`
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

UserInformation.propTypes = {
    userGroup: PropTypes.number.isRequired
};

export default UserInformation;
