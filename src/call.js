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
const TEL = 'tel:';

/**
 * @type {string}
 */
const TELPROMPT = 'telprompt:';


/**
 * Launches a call request
 * @param phone
 * @param prompt
 * @returns {Promise}
 * @constructor
 */
const Call = (phone, prompt = false) =>
{
    return new Promise((resolve, reject) => {

        if (!_.isString(phone)) reject('The provided phone number must be a string');

        let url = ((Platform.OS == 'ios' && prompt) ? TELPROMPT : TEL) + phone;

        Launch(url).then(() => resolve()).catch(error => {

            if (url.includes(TELPROMPT)) {
                return resolve();
            }

            reject(error);
        });
    });
}

/**
 * @exports
 */
export {
    Call
}