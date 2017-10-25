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
const FACEBOOK_PROFILE ='fb://profile/';

/**
 * Launches Facebook profile
 * @param user
 * @returns {Promise}
 */
const Facebook = (user) => {

    return new Promise((resolve, reject) => {

        if (!_.isString(user)) reject('The provided user must be a string');

        let url = FACEBOOK_PROFILE + user;

        Launch(url).then(() => resolve()).catch(error => reject(error));
    });
}



/**
 * @exports
 */
export {
    Facebook,
}