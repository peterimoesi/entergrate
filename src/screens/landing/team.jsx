import React from 'react';

import elizabeth from './assets/team/elizabeth.jpeg';
import peter from './assets/team/peter.jpg';
import osita from './assets/team/osita.jpg';
import max from './assets/team/max.jpeg';
import winnie from './assets/team/winnie.jpeg';

const teamMembers = [
    {
        name: 'Osita',
        img: osita,
        title: 'CEO',
        linkedin: 'https://www.linkedin.com/in/osita-ifezue-0979b96a/'
    },
    {
        name: 'Peter',
        img: peter,
        title: 'Developer',
        linkedin: 'https://www.linkedin.com/in/new-peter/'
    },
    {
        name: 'Elizabeth',
        img: elizabeth,
        title: 'Member',
        linkedin:
            'https://www.linkedin.com/in/elizabeth-ibukun-ikuesan-7823ba21/'
    },
    {
        name: 'Winnie',
        title: 'Member',
        email: 'winnie.mbithe@gmail.com',
        img: winnie
    },
    {
        name: 'Max',
        title: 'Member',
        linkedin: 'https://www.linkedin.com/in/mcdike/',
        img: max
    }
];

const team = () => (
    <section className="bg-light" id="team">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">
                        Meet our members
                    </h2>
                    <h3 className="section-subheading text-muted">
                        Join the conversation.
                    </h3>
                </div>
            </div>
            <div className="row">
                {teamMembers.map((mem, i) => (
                    <div className="col-sm-4" key={`${mem.name}-${i}`}>
                        <div className="team-member">
                            <div className="team-img-cont rounded-circle mx-auto">
                                <img src={mem.img} alt="" />
                            </div>
                            <h4>{mem.name}</h4>
                            <p className="text-muted">{mem.title}</p>
                            <ul className="list-inline social-buttons">
                                {mem.twitter && (
                                    <li className="list-inline-item">
                                        <a href={mem.twitter} target="_blank">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                )}
                                {mem.facebook && (
                                    <li className="list-inline-item">
                                        <a href={mem.facebook} target="_blank">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                )}
                                {mem.linkedin && (
                                    <li className="list-inline-item">
                                        <a href={mem.linkedin} target="_blank">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                )}
                                {mem.email && (
                                    <li className="list-inline-item">
                                        <a href={`mailto:${mem.email}`}>
                                            <i className="fa fa-comment-o" />
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                    {/* <p className="large text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aut eaque, laboriosam veritatis, quos non quis ad
                        perspiciatis, totam corporis ea, alias ut unde.
                    </p> */}
                </div>
            </div>
        </div>
    </section>
);

export default team;
