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
const TEXT = 'sms:';


/**
 * Launches a text (SMS) request
 * @param phone
 * @param message
 * @param autoEncode
 * @returns {Promise}
 */
const Text = (phone, message = null, autoEncode = true) => {

    return new Promise((resolve, reject) => {

        if (!_.isString(phone)) reject('The provided phone number must be a string');

        let url = TEXT + phone;

        if(message) {

            if (!_.isString(phone)) reject('The provided message needs to be a string');

            if (autoEncode) {

                if (Platform.OS === 'android') {
                    message = encodeURIComponent(message)
                }

                message = encodeURIComponent(message);
            }

            url += Platform.OS === 'ios' ? `&body=${message}` : `?body=${message}`;
        }

        Launch(url).then(() => resolve()).catch(error => reject(error));
    });
}

/**
 * @exports
 */
export {
    Text
}