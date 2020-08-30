'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class User {
    constructor(name) {
        this.name = name;
    }
    /**
     * Print log that greeting message
     */
    greet() {
        console.log(`Hello ${this.name}-san :)`);
    }
}

const NAME = 'tyankatsu';

exports.NAME = NAME;
exports.User = User;
