import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CollapseSection from '../../components/collapseSection/collapseSection';
import DefaultInput from '../../components/defaultInput';
import Button from '../../components/buttons';
import './styles.scss';

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.toggleExpand = this.toggleExpand.bind(this);
        this.toggleEditing = this.toggleEditing.bind(this);
        this.onChange = this.onChange.bind(this);
        this.timeout = null;
        this.state = {
            dataLoaded : false,
            expand : false,
            editing : '',
            userData : {
                fullName : props.userData.fullName,
                email : props.userData.email,
                address : props.userData.address,
                phoneNumber : props.userData.phoneNumber,
                password : '',
                bio : props.userData.bio
            }
        };
    }

    onChange(e) {
        const { userData } = this.state;
        userData[e.target.name] = e.target.value;
        this.setState({ userData });
    }

    toggleExpand() {
        this.setState({ expand : !this.state.expand }, () => {
            if (this.state.expand) {
                this.setState({ dataLoaded : true });
            } else {
                this.setState({ dataLoaded : false });
            }
        });
    }

    toggleEditing(e) {
        this.setState({ editing : e });
    }

    render () {
        const { editing } = this.state;
        console.log(this.state);
        return (
            <CollapseSection
                name="Profile"
                expand={this.state.expand}
                dataLoaded={this.state.dataLoaded}
                toggleExpand={this.toggleExpand}
            >
                <div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 input-col">
                            <DefaultInput
                                onChange={this.onChange}
                                label="Full name"
                                value={this.state.userData.fullName}
                                toggleEditing={this.toggleEditing}
                                editing={editing}
                                placeholder="Full name"
                                name="fullName"
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 input-col">
                            <DefaultInput
                                onChange={this.onChange}
                                label="Email"
                                type="email"
                                value={this.state.userData.email}
                                toggleEditing={this.toggleEditing}
                                editing={editing}
                                placeholder="Email"
                                name="email"
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 input-col">
                            <DefaultInput
                                onChange={this.onChange}
                                label="Address"
                                value={this.state.userData.address}
                                toggleEditing={this.toggleEditing}
                                editing={editing}
                                placeholder="Address"
                                name="address"
                            />
                        </div>
                        <div className="col-lg-6 col-md-6-col-sm-12 col-xs-12 input-col">
                            <DefaultInput
                                onChange={this.onChange}
                                label="Phone number"
                                value={this.state.userData.phoneNumber}
                                toggleEditing={this.toggleEditing}
                                editing={editing}
                                placeholder="Phone number"
                                name="phoneNumber"
                            />
                        </div>
                        <div className="col-lg-6 col-md-6-col-sm-12 col-xs-12 input-col">
                            <DefaultInput
                                onChange={this.onChange}
                                label="Change password"
                                value={`${this.state.userData.password}******`}
                                toggleEditing={this.toggleEditing}
                                editing={editing}
                                placeholder="Password"
                                type="password"
                                name="password"
                            />
                        </div>
                        <div className="col-lg-12 col-md-12-col-sm-12 col-xs-12 input-col">
                            <DefaultInput
                                onChange={this.onChange}
                                label="About you"
                                value={this.state.userData.bio}
                                toggleEditing={this.toggleEditing}
                                editing={editing}
                                placeholder="Anout me"
                                type="textArea"
                                name="bio"
                            />
                        </div>
                    </div>
                    <div className="section-cta-right">
                        <Button
                            title="Save"
                            onClick={() => null}
                            type="primary"
                        />
                    </div>
                </div>
            </CollapseSection>
        );
    }
}

Profile.propTypes = {
    userData : PropTypes.object.isRequired
};

function mapStateToProps({ authentication }) {
    return {
        userData : authentication.userData
    };
}

export default connect(mapStateToProps)(Profile);

