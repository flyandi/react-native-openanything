'use strict';

import {
    Platform
} from 'react-native';

import {
    Launch
} from './launcher';

import _ from 'lodash';

/**
 * Launches a web request in the default browser
 * @param url
 * @returns {Promise}
 */
const Web = (url) =>
{
    return new Promise((resolve, reject) => {

        if (!_.isString(url)) reject('The provided url needs to be a string');

        Launch(url).then(() => resolve()).catch(error => reject(error));
    });
}

/**
 * @exports
 */
export {
    Web
}