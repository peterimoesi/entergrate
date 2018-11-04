import React from 'react';
import { Link } from 'react-router-dom';

import Team from './team';

import UserInformation from './userInformation';
import Footer from './footer';

import './styles.scss';

const Landing = () => (
    <div>
        <UserInformation userGroup={1} />
        <section id="about" className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">
                            About
                        </h2>
                        <h3 className="section-subheading text-muted">
                            Entergrate is a social enterprise established in May
                            2018 in Finland. Entergrate as an organization wants
                            to create a professional inclusiveness of immigrants
                            in the society, so that they can add value to the
                            professional lives of the society and themselves. We
                            will form a network which connects immigrants with
                            different organizations giving them access to the
                            information they need to grow, educationally, and
                            professionally. We want to create the synergy
                            between organizations working in the immigrant
                            communities and immigrants themselves. Creating
                            links between people and bringing immigrants
                            together with different agents we aim to ease the
                            challenges immigrants might face during the entry to
                            the labor market and while building a professional
                            career.
                        </h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary" />
                            <i className="fa fa-volume-up fa-stack-1x fa-inverse" />
                        </span>
                        <h4 className="service-heading">Mission</h4>
                        <p className="text-muted">
                            Be the number 1 immigrant platform for professional
                            development, networking, growth and information.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary" />
                            <i className="fa fa-eye fa-stack-1x fa-inverse" />
                        </span>
                        <h4 className="service-heading">Vision</h4>
                        <p className="text-muted">
                            Harness the skills and potential of immigrants in
                            Finland by providing a wide and versatile
                            professional network, and town hall meeting, where
                            strategic solutions are proffered for problems
                            facing immigrants.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary" />
                            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse" />
                        </span>
                        <h4 className="service-heading">Goals</h4>
                        <p className="text-muted">
                            Change the bias stereotype towards immigrants by
                            facilitating the entry to the labor market. Working
                            together with locals and local organizations we
                            create synergy and cooperation.
                        </p>
                    </div>
                </div>
            </div>
        </section>

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
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img
                                        className="rounded-circle img-fluid img-max-height"
                                        src="img/new_bg.jpeg"
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
                                        src="img/Linkbout/2.png"
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
                                        src="img/Linkbout/1.png"
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
