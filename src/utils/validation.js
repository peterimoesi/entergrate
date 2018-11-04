/* eslint-disable no-useless-escape */

class Validation {
    email(str) {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !reg.test(str) && 'Invalid email address. example@example.com';
    }

    phoneNumber(str) {
        const reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return !reg.test(str) && 'Enter a valid phone number';
    }

    url(str) {
        const reg = /[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;
        return (
            !reg.test(str) && 'Invalid Url. Example : http://www.entergrate.org'
        );
    }

    dateTime(date) {
        return Number.isNaN(Date.parse(date)) && 'Enter a valid Date and time';
    }

    fullName(str) {
        const reg = /^[a-zA-Z'\- ]+$/;
        return !reg.test(str) && 'Enter a valid full name';
    }

    password(str) {
        return (
            str.length < 7 &&
            'Your password should contain 7 or more characters'
        );
    }

    others(input) {
        return (!input || !input.length) && 'The field should not be empty';
    }
}

export default new Validation();
