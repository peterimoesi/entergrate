import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userUpdate, deleteAccount } from './action';
import CollapseSection from '../../components/collapseSection/collapseSection';
import DefaultInput from '../../components/defaultInput';
import Button from '../../components/buttons';
import validation from '../../utils/validation';
import Modal from '../../components/modals';
import modalAction from '../../components/modals/action';
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
        this.onDelete = this.onDelete.bind(this);
        this.timeout = null;
        this.state = {
            dataLoaded: false,
            expand: false,
            editing: '',
            cvFileName: '',
            error: {},
            openModal: false,
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
            ...this.getFormChanges()
        });
        this.setState({ editing: '' });
    }

    onDelete() {
        this.setState(state => modalAction(state));
    }

    render() {
        const {
            editing,
            userData,
            openModal,
            expand,
            dataLoaded,
            error
        } = this.state;
        return (
            <CollapseSection
                name={`${userData.fullName} - Profile`}
                expand={expand}
                dataLoaded={dataLoaded}
                toggleExpand={this.toggleExpand}
            >
                <React.Fragment>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 input-col">
                            <DefaultInput
                                onChange={this.onChange}
                                label="Full name"
                                value={userData.fullName}
                                toggleEditing={this.toggleEditing}
                                editing={editing}
                                placeholder="Full name"
                                name="fullName"
                                error={error.fullName}
                                formType="input"
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 input-col">
                            <DefaultInput
                                label="Email"
                                type="email"
                                value={userData.email}
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
                                value={userData.url}
                                toggleEditing={this.toggleEditing}
                                editing={editing}
                                placeholder="LinkedIn or website"
                                name="url"
                                error={error.url}
                                formType="input"
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 input-col">
                            <DefaultInput
                                onChange={this.onChange}
                                label="Address"
                                value={userData.address}
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
                                value={userData.phoneNumber}
                                toggleEditing={this.toggleEditing}
                                editing={editing}
                                placeholder="Phone number"
                                name="phoneNumber"
                                error={error.phoneNumber}
                                formType="input"
                            />
                        </div>
                        <div className="col-lg-6 col-md-6-col-sm-12 col-12 input-col">
                            <DefaultInput
                                onChange={this.onChange}
                                label="Change password"
                                value={userData.password}
                                toggleEditing={this.toggleEditing}
                                error={error.password}
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
                                value={userData.bio}
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
                        <div className="delete-acc" onClick={this.onDelete}>
                            Delete account
                        </div>
                    </div>
                    {openModal ? (
                        <Modal>
                            <div style={{ textAlign: 'center' }}>
                                <div>
                                    <h6>Are you sure you want to delete?</h6>
                                </div>
                                <div style={{ marginTop: '30px' }}>
                                    <Button
                                        title="Delete"
                                        onClick={() =>
                                            this.props.deleteAccount()
                                        }
                                        type="primary"
                                    />
                                </div>
                            </div>
                        </Modal>
                    ) : null}
                </React.Fragment>
            </CollapseSection>
        );
    }
}

Profile.propTypes = {
    userData: PropTypes.object.isRequired,
    userUpdate: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
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
    { userUpdate, deleteAccount }
)(Profile);
