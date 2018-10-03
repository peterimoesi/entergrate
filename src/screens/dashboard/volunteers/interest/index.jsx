import React from 'react';

import CollapseSection from '../../../../components/collapseSection/collapseSection';
import InterestItem from './interestComponent';

class Interest extends React.Component {
    constructor() {
        super();
        this.state = {
            expand : false,
            dataLoaded : false,
            showMore : ''
        };
        this.toggleExpand = this.toggleExpand.bind(this);
        this.toggleShowMore = this.toggleShowMore.bind(this);
        this.fakeInterest = [
            {
                eventName : 'heeh',
                businessName : 'ehehehe',
                active : true,
                eventDescription : 'eheheh',
                eventLocation : 'ehehee',
                eventArtwork : 'hehehehehe',
                id : 'ipoiofoio',
                dateApplied : '22-03-1220',
                eventDate : '22-03-4238'
            },
            {
                eventName : 't4tt4t',
                businessName : 'yuyuyuyu',
                active : false,
                eventDescription : `The first prototype of Matchmade was finished in September 2016. We ran our first test
                campaigns in November 2016 and were very satisfied with the results. After a few months of
                polishing, we started soliciting customers at GDC in March 2017.
                Currently the platform has the potential of being mostly self service for both the advertisers and
                influencers, but in reality some steps always require manual intervention from the team.
                `,
                eventLocation : 'uikuiuoi',
                eventArtwork : 'gsdtggs',
                id : 'kioeiooig',
                dateApplied : '22-03-1220',
                eventDate : '22-03-4238'
            },
            {
                eventName : 'heeh',
                businessName : 'ehehehe',
                active : true,
                eventDescription : `The first prototype of Matchmade was finished in September 2016. We ran our first test
                campaigns in November 2016 and were very satisfied with the results. After a few months of
                polishing, we started soliciting customers at GDC in March 2017.
                Currently the platform has the potential of being mostly self service for both the advertisers and
                influencers, but in reality some steps always require manual intervention from the team.
                `,
                eventLocation : 'ehehee',
                eventArtwork : 'hehehehehe',
                id : '459009igioj',
                dateApplied : '22-03-1220',
                eventDate : '22-03-4238'
            },
        ];
    }
    toggleExpand() {
        this.setState({ expand : !this.state.expand }, () => {
            if (this.state.expand) {
                this.timeout = setTimeout(() => this.setState({ dataLoaded : true }), 0);
            } else {
                clearTimeout(this.timeout);
                this.setState({ dataLoaded : false });
            }
        });
    }
    toggleShowMore(e) {
        const { showMore } = this.state;
        if (e === showMore) {
            this.setState({ showMore : '' });
        } else {
            this.setState({ showMore : e });
        }
    }
    render() {
        return (
            <CollapseSection
                name="Your Interest"
                expand={this.state.expand}
                dataLoaded={this.state.dataLoaded}
                toggleExpand={this.toggleExpand}
            >
                <div>
                    {
                        this.fakeInterest.map(int => (
                            <InterestItem
                                key={int.id}
                                interestItem={int}
                                toggleShowMore={this.toggleShowMore}
                                showMore={this.state.showMore}
                            />
                        ))
                    }
                </div>
            </CollapseSection>
        );
    }
}

export default Interest;

