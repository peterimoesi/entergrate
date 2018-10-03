import React from 'react';

import NavComponent from './component';

class Navigation extends React.Component {
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.setNavRef = this.setNavRef.bind(this);
        this.navRef = null;
    }
    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 100) {
            if (this.navRef && !this.navRef.classList.contains('navbar-shrink')) {
                this.navRef.classList.add('navbar-shrink');
            }
        } else {
            if (this.navRef && this.navRef.classList.contains('navbar-shrink')) {
                this.navRef.classList.remove('navbar-shrink');
            }
        }
    }
    setNavRef(e) {
        this.navRef = e;
    }
    render() {
        return (
            <NavComponent
                setNavRef={this.setNavRef}
            />
        );
    }
}

export default Navigation;
