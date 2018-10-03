import React from 'react';
import Button from '../../../../components/buttons';
import CollapseSection from '../../../../components/collapseSection/collapseSection';

class Events extends React.Component {
    constructor() {
        super();
        this.state = {
            expand : false,
            dataLoaded : false,
        };
        this.toggleExpand = this.toggleExpand.bind(this);
        this.fakedData = [
            {
                eventName : 'heeh',
                businessName : 'ehehehe',
                active : true,
                eventDescription : 'eheheh',
                eventLocation : 'ehehee',
                eventArtwork : 'hehehehehe',
                id : 'ipoiofoio',
                dateCreated : '22-03-1220',
                eventDate : '34-34-3434',
                volunteers : [
                    {
                        name : 'wfiwifoh',
                        id : 'feihfiehfhief',
                        dateApplied : '23-22-2323',
                        profileImg : ''
                    }, {
                        name : 'wfiwifoh',
                        id : 'feihfieehfhief',
                        dateApplied : '23-22-2323',
                        profileImg : ''
                    }

                ]
            }, {
                eventName : 'heehee',
                businessName : 'ehehehe',
                active : true,
                eventDescription : 'eheheh',
                eventLocation : 'ehehee',
                eventArtwork : 'hehehehehe',
                id : 'ipoieofoio',
                dateCreated : '22-03-1220',
                eventDate : '34-34-3434',
                volunteers : [
                    {
                        name : 'wfiwifoh',
                        id : 'feihfiehfhief',
                        dateApplied : '23-22-2323',
                        profileImg : ''
                    }, {
                        name : 'wfiwifoh',
                        id : 'feihfieehfhief',
                        dateApplied : '23-22-2323',
                        profileImg : ''
                    }

                ]
            }
        ];
    }

    toggleExpand() {
        this.setState({ expand : !this.state.expand }, () => {
            if (this.state.expand) {
                this.timeout = setTimeout(() => this.setState({ dataLoaded : true }), 500);
            } else {
                clearTimeout(this.timeout);
                this.setState({ dataLoaded : false });
            }
        });
    }
    
    render() {
        return (
            <CollapseSection
                name="Events"
                expand={this.state.expand}
                dataLoaded={this.state.dataLoaded}
                toggleExpand={this.toggleExpand}
            >
                <div/>
                <div className="section-cta">
                    <Button
                        title="Add new"
                        onClick={() => null}
                        type="secondary"
                    />
                </div>
            </CollapseSection>
        );
    }
}

export default Events;