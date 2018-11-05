import React from 'react';

import './styles.scss';

class NotificationMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
        this.onOpen = this.onOpen.bind(this);
    }

    onOpen() {
        this.setState({ open: !this.state.open });
    }

    render() {
        const { open } = this.state;
        return (
            <div className="notification-menu">
                <div
                    className="notification-icon"
                    onClick={() => this.onOpen()}
                >
                    <i className={`fa fa-${open ? 'close' : 'bell'}`} />
                </div>
                <div className={`notification-list ${open ? 'show' : ''}`}>
                    <div>
                        <div className="notification-head">Notification</div>
                    </div>
                    <div className="no-notification">
                        <h6>No notifications</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotificationMenu;
