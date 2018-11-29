import React from 'react';
import Carousel from '../../../components/carousel';

import pic2 from './imgs/2.jpeg';
import pic3 from './imgs/3.jpg';
import pic4 from './imgs/4.JPG';
import pic5 from './imgs/5.JPG';
import pic6 from './imgs/6.JPG';
import pic7 from './imgs/7.jpg';
import pic8 from './imgs/8.jpeg';
import pic9 from './imgs/9.jpg';
import pic10 from './imgs/10.JPG';

const about = () => (
    <section id="about" className="about-section bg-light">
        <Carousel img={[pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10]}>
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
        </Carousel>
    </section>
);

export default about;
