import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../../../components/buttons';
import CollapseSection from '../../../../components/collapseSection/collapseSection';
import InterestItem from './interestComponent';

class Interest extends React.Component {
    constructor() {
        super();
        this.state = {
            expand: false,
            dataLoaded: false,
            showMore: ''
        };
        this.toggleExpand = this.toggleExpand.bind(this);
        this.toggleShowMore = this.toggleShowMore.bind(this);
    }
    toggleExpand() {
        this.setState({ expand: !this.state.expand }, () => {
            if (this.state.expand) {
                this.timeout = setTimeout(
                    () => this.setState({ dataLoaded: true }),
                    0
                );
            } else {
                clearTimeout(this.timeout);
                this.setState({ dataLoaded: false });
            }
        });
    }
    toggleShowMore(e) {
        const { showMore } = this.state;
        if (e === showMore) {
            this.setState({ showMore: '' });
        } else {
            this.setState({ showMore: e });
        }
    }
    render() {
        const { interests } = this.props;
        return (
            <CollapseSection
                name="Your Interest"
                expand={this.state.expand}
                dataLoaded={this.state.dataLoaded}
                toggleExpand={this.toggleExpand}
            >
                <div>
                    {interests.map(int => (
                        <InterestItem
                            key={int._id}
                            interestItem={int}
                            toggleShowMore={this.toggleShowMore}
                            showMore={this.state.showMore}
                        />
                    ))}
                    {!interests.length ? (
                        <div style={{ marginTop: '30px' }}>
                            <h5>
                                You do not have any interest at the moment.
                                Click{' '}
                                <Link to="/open-events">
                                    <Button
                                        title="here"
                                        onClick={() => null}
                                        type="primary"
                                    />
                                </Link>{' '}
                                to checkout open positions
                            </h5>
                        </div>
                    ) : null}
                </div>
            </CollapseSection>
        );
    }
}

Interest.propTypes = {
    interests: PropTypes.array
};

Interest.defaultProps = {
    interests: []
};

function mapStateToProps({ authentication }) {
    return {
        interests: authentication.userData.interest
    };
}

export default connect(mapStateToProps)(Interest);
