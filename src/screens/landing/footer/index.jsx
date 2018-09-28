import React from 'react';

const footer = () => (
    <div>
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Join the conversation.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <form id="contactForm" method="post" action="contact" name="snoValidate" noValidate="novalidate">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            id="name"
                                            type="text"
                                            placeholder="Your Name *"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" id="email" type="email" placeholder="Your Email *" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
                        
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <span className="copyright">Copyright &copy; Entergrate 2018</span>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/entergratefinland/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/EntergrateFINLAND/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/company/entergrate/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline quicklinks">
                            <li className="list-inline-item">
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">Terms of Use</a>
                            </li>
                        </ul>
 ;                   </div>
                </div>
            </div>
        </footer>
    </div>
);

export default footer;
