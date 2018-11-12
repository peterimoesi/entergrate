import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NoPage from '../no-page';
import ForEntergrates from './forEntergrates';

import scrollTo from '../../utils/scrollTo';
// import Wantentergrates from './wantentergrates';

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
        if (this.userApplyRef) {
            this.userApplyRef.addEventListener('scroll', this.handleScroll);
            this.applyContainerHeightMid = this.userApplyRef.offsetHeight / 2;
            this.navRef = document.querySelector('#mainNav');
            this.formInputs = document.querySelectorAll('.apply-form-inputs');
        }
    }
    componentWillUnmount() {
        if (this.userApplyRef) {
            this.userApplyRef.removeEventListener('scroll', this.handleScroll);
        }
    }

    setUserApplyRef(e) {
        this.userApplyRef = e;
    }

    handleScroll() {
        const applyContainerTop = this.userApplyRef.scrollTop;
        [].forEach.call(this.formInputs, elem => {
            const elemTop = elem.offsetTop;
            const elemHeight = elem.offsetHeight;
            if (
                elemTop - applyContainerTop < this.applyContainerHeightMid &&
                elemTop + elemHeight - applyContainerTop >=
                    this.applyContainerHeightMid
            ) {
                elem.classList.add('scroll-view');
                // autofocus input
                const input =
                    elem.querySelector('input') ||
                    elem.querySelector('textarea');
                if (input) {
                    input.focus();
                }
                // very specific, unrelated condition for react date time, please refactor
                // if elem has date picker
                const reactDateTime = elem.querySelector('.rdt');
                if (reactDateTime) {
                    reactDateTime.classList.add('rdtOpen');
                }
            } else {
                elem.classList.remove('scroll-view');
                const reactDateTime = elem.querySelector('.rdt');
                if (reactDateTime) {
                    reactDateTime.classList.remove('rdtOpen');
                }
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
        var screenWidth = window.matchMedia('(min-width: 992px)').matches;
        if (screenWidth) {
            const firstElemOffsetTop = this.userApplyRef.firstElementChild
                .offsetTop;
            if (this.userApplyRef.scrollTo) {
                // this.userApplyRef.scrollTo(
                //     0,
                //     e.target.offsetTop - firstElemOffsetTop
                // );
                scrollTo(
                    e.target.offsetTop - firstElemOffsetTop,
                    this.userApplyRef,
                    null,
                    500
                );
            }
        }
    }

    onEnterClick(e) {
        // e.preventDefault();
        if (e.keyCode === 13) {
            [].forEach.call(this.formInputs, (elem, x) => {
                if (
                    elem.classList.contains('scroll-view') &&
                    this.formInputs[x + 1]
                ) {
                    const firstElemOffsetTop = this.userApplyRef
                        .firstElementChild.offsetTop;
                    if (this.userApplyRef.scrollTo) {
                        // this.userApplyRef.scrollTo(
                        //     0,
                        //     this.formInputs[x + 1].offsetTop -
                        //         firstElemOffsetTop
                        // );
                        scrollTo(
                            this.formInputs[x + 1].offsetTop -
                                firstElemOffsetTop,
                            this.userApplyRef,
                            null,
                            500
                        );
                    }
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
                        <Route
                            path="/apply/for-entergrates"
                            render={props => (
                                <ForEntergrates
                                    {...props}
                                    setRef={this.setUserApplyRef}
                                    onInputClick={this.onInputClick}
                                    onEnterClick={this.onEnterClick}
                                />
                            )}
                        />
                        {/* <Route
                            path="/apply/want-entergrates"
                            render={props => (
                                <Wantentergrates
                                    {...props}
                                    setRef={this.setUserApplyRef}
                                    onInputClick={this.onInputClick}
                                    onEnterClick={this.onEnterClick}
                                />
                            )}
                        /> */}
                        <Route path="/apply" component={NoPage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Users;
