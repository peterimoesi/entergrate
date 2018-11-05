import React from 'react';

import Button from '../../../components/buttons';
import landingImg from './new_bg.jpeg';
import { animateToElem } from '../../../utils/general';

class MainLanding extends React.Component {
    constructor() {
        super();
        this.countdownTIme = this.countdownTIme.bind(this);
        this.timerRef = null;
        this.setRef = this.setRef.bind(this);
        this.interval = null;
    }

    componentDidMount() {
        this.countdownTIme();
    }

    countdownTIme() {
        const countDownDate = new Date('Nov 6, 2018 17:30:00').getTime();

        this.interval = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('countdown-timer').innerHTML =
                days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

            if (distance < 0) {
                clearInterval(this.interval);
                document.getElementById('countdown-timer').innerHTML =
                    'EXPIRED';
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    setRef(e) {
        this.timerRef = e;
    }

    render() {
        return (
            <header className="masthead">
                <div className="container">
                    <div className="master-bg-cont">
                        <img src={landingImg} />
                    </div>
                    <div className="intro-text">
                        <div className="intro-wrapper">
                            <h4 className="subheading">
                                Harnessing the full potentials of the immigrants
                                in Finland
                            </h4>
                            <div
                                className="intro-heading text-uppercase"
                                id="countdown-timer"
                                ref={this.setRef}
                            >
                                06 - Nov - 2018
                            </div>
                            <div className="intro-next-event-click">
                                <p>
                                    Click{' '}
                                    <a
                                        // eslint-disable-next-line react/jsx-no-target-blank
                                        target="_blank"
                                        href="https://www.eventbrite.com/e/entergrate-town-hall-meeting-tickets-51659582201?aff=efbevent&fbclid=IwAR0WAyCEhY955NmDAhI2KUW7dCkXzxTwh7cLPLmWGBkHqAI_FjIL6A96VXQ"
                                    >
                                        here
                                    </a>{' '}
                                    for free registration
                                </p>
                            </div>
                            <Button
                                title="Tell Me More"
                                onClick={() =>
                                    animateToElem(
                                        document.querySelector('#about'),
                                        800
                                    )
                                }
                                size="xl"
                                type="primary"
                            />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default MainLanding;
