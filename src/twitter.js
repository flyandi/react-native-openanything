'use strict';

import {
    Platform
} from 'react-native';

import {
    Launch
} from './launcher';

import _ from 'lodash';

/**
 * @type {string}
 */
const TWITTER ='twitter://user?id=';


/**
 * Launches Twitter with the select user
 * @param user
 * @returns {Promise}
 */
const Twitter = (user) => {

    return new Promise((resolve, reject) => {

        if (!_.isString(user)) reject('The provided user must be a string');

        let url = TWITTER + user;

        Launch(url).then(() => resolve()).catch(error => reject(error));
    });
}

/**
 * @exports
 */
export {
    Twitter
}