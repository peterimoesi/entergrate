import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NoPage from '../no-page';
import ForVolunteers from './forVolunteers';
import WantVolunteers from './wantVolunteers';

import './styles.scss';

class Users extends React.Component {
    constructor() {
        super();
        this.userApplyRef = null;
        this.setUserApplyRef = this.setUserApplyRef.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.onInputClick = this.onInputClick.bind(this);
        this.onEnterClick = this.onEnterClick.bind(this);
        this.formInputs = null;
        this.navRef = null;
    }
    componentDidMount() {
        this.userApplyRef.addEventListener('scroll', this.handleScroll);
        this.applyContainerHeightMid =  this.userApplyRef.offsetHeight / 2;
        this.navRef = document.querySelector('#mainNav');
        this.formInputs = document.querySelectorAll('.apply-form-inputs');

    }
    componentWillUnmount() {
        this.userApplyRef.removeEventListener('scroll', this.handleScroll);
    }

    setUserApplyRef(e) {
        this.userApplyRef = e;
    }

    handleScroll() {
        const applyContainerTop = this.userApplyRef.scrollTop;
        [].forEach.call(this.formInputs, (elem) => {
            const elemTop = elem.offsetTop;
            const elemHeight = elem.offsetHeight;
            if ((elemTop - applyContainerTop) < this.applyContainerHeightMid &&
                ((elemTop + elemHeight) - applyContainerTop) >= (this.applyContainerHeightMid))
            {
                elem.classList.add('scroll-view');
                // autofocus input
                const input = elem.querySelector('input') || elem.querySelector('textarea');
                if (input) { input.focus(); }
            } else {
                elem.classList.remove('scroll-view');
            }
        });
        // Shrink navbar
        if (applyContainerTop > 100 && this.navRef) {
            this.navRef.classList.add('navbar-shrink');
        } else {
            this.navRef.classList.remove('navbar-shrink');
        }
    }

    onInputClick(e) {
        const firstElemOffsetTop = this.formInputs[0].offsetTop;
        this.userApplyRef.scrollTo(0, e.target.offsetTop - firstElemOffsetTop);
    }

    onEnterClick(e) {
        console.log(e.keyCode);
        if (e.keyCode === 13) {
            [].forEach.call(this.formInputs, (elem, x) => {
                if (elem.classList.contains('scroll-view') && this.formInputs[x + 1]) {
                    const firstElemOffsetTop = this.formInputs[0].offsetTop;
                    this.userApplyRef.scrollTo(0, this.formInputs[x + 1].offsetTop - firstElemOffsetTop);
                    return;
                }
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="user-apply-container">
                    <Switch>
                        <Route path="/apply/for-volunteers"
                            render={(props) =>
                                <ForVolunteers
                                    {...props}
                                    setRef={this.setUserApplyRef}
                                    onInputClick={this.onInputClick}
                                    onEnterClick={this.onEnterClick}
                                />}
                        />
                        <Route path="/apply/want-volunteers" component={WantVolunteers} />
                        <Route path="/apply" component={NoPage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Users;