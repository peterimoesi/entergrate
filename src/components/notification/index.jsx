import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideNotice } from '../../globalActions';
import './styles.scss';

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.noticeRef = React.createRef();
    }

    componentDidUpdate(prevProps) {
        const { status } = this.props;
        if (prevProps.status !== status) {
            if (status) {
                this.noticeRef.current.classList.add('show');
            } else {
                this.noticeRef.current.classList.remove('show');
            }
        }
    }

    render() {
        return (
            <div ref={this.noticeRef} className="notice-cont">
                <div className="notification">
                    <i
                        className="fa fa-close"
                        onClick={() => this.props.hideNotice()}
                    />
                    <span>{this.props.message}</span>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ notification }) {
    return {
        status: notification.status,
        message: notification.message
    };
}

Notification.propTypes = {
    hideNotice: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
};

export default connect(
    mapStateToProps,
    { hideNotice }
)(Notification);
