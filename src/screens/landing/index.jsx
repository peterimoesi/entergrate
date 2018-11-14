/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';
import About from './about';
import Team from './team';

// import MainLanding from './mainLanding';
import UserInformation from './userInformation';
import Footer from './footer';

import newBg from './assets/new_bg.jpeg';

import './styles.scss';

const Landing = () => (
    <div id="landing-page">
        {/* <MainLanding /> */}
        <UserInformation userGroup={1} />
        <About />
        <section id="events">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">
                            Events
                        </h2>
                        <h3 className="section-subheading text-muted">
                            Past and upcoming events
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="timeline">
                            <li>
                                <div className="timeline-image">
                                    <img
                                        className="rounded-circle img-fluid img-max-height"
                                        style={{ width: '100%' }}
                                        src={newBg}
                                        alt=""
                                    />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>November 6 2018</h4>
                                        <h4 className="subheading">
                                            Harnessing the full potentials of
                                            the immigrants in Finland
                                        </h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">
                                            Come be an Entergrate volunteer
                                        </p>
                                        <p className="text-muted">
                                            Click{' '}
                                            <a
                                                href="https://www.eventbrite.com/e/entergrate-town-hall-meeting-tickets-51659582201?aff=erelexpmlt"
                                                target="_blank"
                                            >
                                                here
                                            </a>{' '}
                                            for more information
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img
                                        className="rounded-circle img-fluid img-max-height"
                                        src={newBg}
                                        alt=""
                                    />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>August 20 2018</h4>
                                        <h4 className="subheading">
                                            Become a volunteer
                                        </h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">
                                            Come be an Entergrate volunteer
                                        </p>
                                        <p className="text-muted">
                                            Click{' '}
                                            <a
                                                target="_blank"
                                                to="https://www.eventbrite.com/e/come-volunteer-for-entergrate-tickets-48952482192"
                                            >
                                                here
                                            </a>{' '}
                                            for more information
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-image">
                                    <img
                                        className="rounded-circle img-fluid img-max-height"
                                        src={newBg}
                                        alt=""
                                    />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>August 09 2018</h4>
                                        <h4 className="subheading">
                                            Townhall meeting
                                        </h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">
                                            Click{' '}
                                            <Link to="https://www.eventbrite.com/e/entergrate-helsinki-town-hall-meeting-tickets-47983062632?ref=eios&aff=eios">
                                                here
                                            </Link>{' '}
                                            for more information
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img
                                        className="rounded-circle img-fluid img-max-height"
                                        src={newBg}
                                        alt=""
                                    />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>May 2018</h4>
                                        <h4 className="subheading">
                                            Join the Conversation
                                        </h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">
                                            First townhall meeting to spark a
                                            converstation on harnessing the
                                            powers and skills of the immigrats
                                            in Finland
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <h4>
                                        Join
                                        <br />
                                        The
                                        <br />
                                        Conversation!
                                    </h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <Team />
        <Footer />
    </div>
);

export default Landing;
