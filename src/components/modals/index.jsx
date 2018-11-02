import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Modal extends React.Component {
    constructor() {
        super();
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        document.querySelector('body').classList.add('no-scroll');
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        document.querySelector('body').classList.remove('no-scroll');
    }

    handleKeyDown(e) {
        if (e.keyCode === 27) {
            this.props.close();
        }
    }

    render() {
        return (
            <div className="ent-modal">
                <div className="modal-child">
                    <div className="close-modal">
                        <i
                            className="fa fa-close"
                            onClick={this.props.close}
                        />
                    </div>
                    
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    children : PropTypes.element.isRequired,
    close : PropTypes.func.isRequired
};

export default Modal;
