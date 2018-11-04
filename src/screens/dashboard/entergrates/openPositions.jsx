import React from 'react';

import CollapseSection from '../../../components/collapseSection/collapseSection';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            expand : false,
            dataLoaded : true,
        };
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    toggleExpand() {
        this.setState({ expand : !this.state.expand });
    }
    render () {
        return(
            <CollapseSection
                name="Search"
                expand={this.state.expand}
                dataLoaded={this.state.dataLoaded}
                toggleExpand={this.toggleExpand}
            >
                <div style={{ marginTop : '30px'}}>
                    <h5>This option is coming soon</h5>
                </div>
            </CollapseSection>
        );
    }
}

export default Search;

