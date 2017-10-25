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
const FACETIME = 'facetime:';

/**
 * @type {string}
 */
const FACETIME_AUDIO= 'facetime-audio:';


/**
 * Launches a facetime request
 * @param target
 * @param audioOnly
 * @returns {Promise}
 * @constructor
 */
const Facetime = (target, audioOnly = false) => {

    return new Promise((resolve, reject) => {

        if(Platform.OS != "ios") reject("Facetime is only supported on iOS.")

        if (!_.isString(target)) reject('The provided target must be a string and contain a username or a phone number');

        const url = (audioOnly ? FACETIME_AUDIO : FACETIME) + target;

        Launch(url).then(() => resolve()).catch(error => reject(error));
    });
}

/**
 * @exports
 */
export {
    Facetime
}