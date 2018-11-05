import React from 'react';

const footer = () => (
    <div>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <span className="copyright">
                            Copyright &copy; Entergrate 2018
                        </span>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a
                                    href="https://www.instagram.com/entergratefinland/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa fa-instagram" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    href="https://www.facebook.com/EntergrateFINLAND/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa fa-facebook" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    href="https://www.linkedin.com/company/entergrate/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa fa-linkedin" />
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
                        ;{' '}
                    </div>
                </div>
            </div>
        </footer>
    </div>
);

export default footer;
