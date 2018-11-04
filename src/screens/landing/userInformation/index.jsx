import React from 'react';
import PropTypes from 'prop-types';

import history from '../../../routes/history';
import Button from '../../../components/buttons';

import './styles.scss';

const UserInformation = ({ userGroup }) => (
    <section id="beEntergrate">
        <div className="container">
            <div className="user-info user-info-show">
                <div>
                    <h2 className="section-heading text-uppercase">
                        Want to be an Entergrate?
                    </h2>
                    <p className="text-muted">
                        Entergrate is a social enterprise established in May
                        2018 in Finland. Entergrate as an organization wants to
                        create a professional inclusiveness of immigrants in the
                        society, so that they can add value to the professional
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
    </section>
);

UserInformation.propTypes = {
    userGroup: PropTypes.number.isRequired
};

export default UserInformation;
