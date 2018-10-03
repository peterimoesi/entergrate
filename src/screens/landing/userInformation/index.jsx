import React from 'react';
import PropTypes from 'prop-types';

import history from '../../../routes/history';
import Button from '../../../components/buttons';

import './styles.scss';

class UserInformation extends React.Component {
    constructor() {
        super();
        this.state = {
            loaded : false
        };
        this.timeout = null;
    }
    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ loaded : true }), 10);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.userGroup !== nextProps.userGroup) {
            this.setState({ loaded : false }, () => {
                this.timeout = setTimeout(() => this.setState({ loaded : true }), 800);
            });
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const { userGroup } = this.props;
        return (    
            <div className="container">
                <div
                    className={`user-info ${userGroup === 1 ? 'text-align-left' : 'text-align-right'} ${this.state.loaded && 'user-info-show'}`}>
                    { this.state.loaded &&
                        <div>
                            {
                                userGroup === 1 ?
                                    <div>
                                        <h2>Want to Volunteer?</h2>
                                        <p>
                            Entergrate is a social enterprise established in May 2018 in Finland.
                            Entergrate as an organization wants to create a professional inclusiveness of
                            immigrants in the society, so that they can add value to the professional
                            lives of the society and themselves.
                                        </p>
                                    </div> :
                                    <div>
                                        <h2>Need Volunteer?</h2>
                                        <p>
                        Entergrate is a social enterprise established in May 2018 in Finland.
                        Entergrate as an organization wants to create a professional inclusiveness of
                        immigrants in the society, so that they can add value to the professional
                        lives of the society and themselves.
                                        </p>
                                    </div>
                            }
                            <div className="user-group-cta">
                                <Button
                                    title="Begin here"
                                    type="primary"
                                    onClick={() => history.push(`/apply${userGroup === 1 ? '/for' : '/want'}-volunteers`)}
                                />
                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        );
    }
}

UserInformation.propTypes = {
    userGroup : PropTypes.number.isRequired
};

export default UserInformation;
