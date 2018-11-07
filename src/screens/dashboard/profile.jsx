import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userUpdate } from './action';
import CollapseSection from '../../components/collapseSection/collapseSection';
import DefaultInput from '../../components/defaultInput';
import Button from '../../components/buttons';
import validation from '../../utils/validation';
import { checkForErrors } from '../../utils/general';
import './styles.scss';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.toggleExpand = this.toggleExpand.bind(this);
        this.toggleEditing = this.toggleEditing.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleCVUpload = this.handleCVUpload.bind(this);
        this.saveForm = this.saveForm.bind(this);
        this.getFormChanges = this.getFormChanges.bind(this);
        this.checkForErrors = checkForErrors.bind(this);
        this.timeout = null;
        this.state = {
            dataLoaded: false,
            expand: false,
            editing: '',
            cvFileName: '',
            error: {},
            userData: {
                fullName: props.userData.fullName,
                email: props.userData.email,
                address: props.userData.address,
                phoneNumber: props.userData.phoneNumber,
                password: '',
                bio: props.userData.bio,
                url: props.userData.url || '',
                cv: props.userData.cv
            }
        };
    }

    onChange(e) {
        const { userData } = this.state;
        userData[e.target.name] = e.target.value;
        this.setState({ userData });
    }

    toggleExpand() {
        this.setState({ expand: !this.state.expand }, () => {
            if (this.state.expand) {
                this.setState({ dataLoaded: true });
            } else {
                this.setState({ dataLoaded: false });
            }
        });
    }

    toggleEditing(e) {
        this.setState({ editing: e });
    }

    handleCVUpload(e) {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = e => {
            const { userData } = this.state;
            userData.cv = e.target.result;
            this.setState({ userData });
        };
        if (e.target.files[0]) {
            this.setState({ cvFileName: e.target.files[0].name });
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    getFormChanges() {
        // check which fields are different
        const { userData } = this.state,
            defaultUserData = this.props.userData,
            userKeys = Object.keys(userData),
            updatedKeys = {};
        for (let i of userKeys) {
            if (userData[i] != defaultUserData[i]) {
                updatedKeys[i] = userData[i];
            }
        }
        return updatedKeys;
    }

    validateChanges() {
        const object = this.getFormChanges();
        const formChanges = Object.keys(object);
        const { error } = this.state;
        for (let key of formChanges) {
            if (validation[key]) {
                error[key] = validation[key](object[key]);
            }
        }
        this.setState({ error });
    }

    saveForm() {
        this.validateChanges(this.getFormChanges());
        if (!this.checkForErrors()) return;
        this.props.userUpdate({
            _id: this.props.userData._id,
            ...this.getFormChanges()
        });
        this.setState({ editing: '' });
    }

    render() {
        const { editing } = this.state;
        return (
            <CollapseSection
                name={`${this.state.userData.fullName} - Profile`}
                expand={this.state.expand}
                dataLoaded={this.state.dataLoaded}
                toggleExpand={this.toggleExpand}
            >
                <React.Fragment>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 input-col">
                            <DefaultInput
                                onChange={this.onChange}
                                label="Full name"
                                value={this.state.userData.fullName}
                                toggleEditing={this.toggleEditing}
                                editing={editing}
                                placeholder="Full name"
                                name="fullName"
                                error={this.state.error.fullName}
                                formType="input"
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 input-col">
                            <DefaultInput
                                label="Email"
                                type="email"
                                value={this.state.userData.email}
                                placeholder="Email"
                                name="email"
                                formType="input"
                                noIcon
                                readOnly
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 input-col">
                            <DefaultInput
                                onChange={this.onChange}
                                label="Link to LinkedIn page or personal website"
                                type="text"
                                value={this.state.userData.url}
                                toggleEditing={this.toggleEditing}
                                editing={editing}
                                placeholder="LinkedIn or website"
                                name="url"
                                error={this.state.error.url}
                                formType="input"
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 input-col">
                            <DefaultInput
                                onChange={this.onChange}
                                label="Address"
                                value={this.state.userData.address}
                                toggleEditing={this.toggleEditing}
                                editing={editing}
                                placeholder="Address"
                                name="address"
                                formType="input"
                            />
                        </div>
                        <div className="col-lg-6 col-md-6-col-sm-12 col-12 input-col">
                            <DefaultInput
                                onChange={this.onChange}
                                label="Phone number"
                                value={this.state.userData.phoneNumber}
                                toggleEditing={this.toggleEditing}
                                editing={editing}
                                placeholder="Phone number"
                                name="phoneNumber"
                                error={this.state.error.phoneNumber}
                                formType="input"
                            />
                        </div>
                        <div className="col-lg-6 col-md-6-col-sm-12 col-12 input-col">
                            <DefaultInput
                                onChange={this.onChange}
                                label="Change password"
                                value={this.state.userData.password}
                                toggleEditing={this.toggleEditing}
                                error={this.state.error.password}
                                editing={editing}
                                placeholder="Password"
                                type="password"
                                autocomplete="new-password"
                                name="password"
                                formType="input"
                            />
                        </div>
                        {this.props.uploadCV && (
                            <div className="col-lg-6 col-md-6-col-sm-12 col-12 input-col">
                                <div className="cv-upload-cont">
                                    <label htmlFor="file-upload">
                                        <i className="fa fa-arrow-up" />
                                        Upload your CV
                                    </label>
                                    <div className="cv-filename">
                                        {this.state.cvFileName}
                                    </div>
                                    <div className="input-container">
                                        <input
                                            type="file"
                                            id="file-upload"
                                            placeholder="upload file"
                                            onChange={this.handleCVUpload}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="col-lg-12 col-md-12-col-sm-12 col-12 input-col">
                            <DefaultInput
                                onChange={this.onChange}
                                label="About you"
                                value={this.state.userData.bio}
                                toggleEditing={this.toggleEditing}
                                editing={editing}
                                placeholder="About me"
                                formType="textArea"
                                maxLength={240}
                                name="bio"
                            />
                        </div>
                    </div>
                    <div className="section-cta-right">
                        <Button
                            title="Save"
                            onClick={this.saveForm}
                            type="primary"
                        />
                    </div>
                </React.Fragment>
            </CollapseSection>
        );
    }
}

Profile.propTypes = {
    userData: PropTypes.object.isRequired,
    userUpdate: PropTypes.func.isRequired,
    uploadCV: PropTypes.bool
};

Profile.defaultProps = {
    uploadCV: null
};

function mapStateToProps({ authentication }) {
    return {
        userData: authentication.userData
    };
}

export default connect(
    mapStateToProps,
    { userUpdate }
)(Profile);
