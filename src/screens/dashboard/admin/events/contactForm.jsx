import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/buttons';
import DefaultInput from '../../../../components/defaultInput';

const contactForm = ({
    formData,
    onChange,
    submit
    // error
}) => (
    <div className="contact-form">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 new-event-input">
                <DefaultInput
                    label="Recipents"
                    value={formData.to}
                    placeholder="Recipents"
                    noIcon
                    type="text"
                    formType="input"
                    readOnly
                    name="to"
                    // error={error.to}
                />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 new-event-input">
                <DefaultInput
                    onChange={e => onChange('subject', e.target.value)}
                    label="Message subject"
                    value={formData.subject}
                    placeholder="Subject"
                    noIcon
                    type="text"
                    formType="input"
                    name="subject"
                    // error={error.to}
                />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 new-event-input">
                <DefaultInput
                    onChange={e => onChange('message', e)}
                    label="Message"
                    value={formData.message}
                    placeholder="Message"
                    name="Message"
                    formType="exTextArea"
                    // error={error.description}
                    noIcon
                />
            </div>
        </div>
        <div className="section-cta-right">
            <Button title="Send" onClick={() => submit()} type="primary" />
        </div>
    </div>
);

contactForm.propTypes = {
    submit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    modify: PropTypes.bool,
    formData: PropTypes.object
};

contactForm.defaultProps = {
    // eventData: null
};

export default contactForm;
