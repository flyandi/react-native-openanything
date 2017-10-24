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

        if(body) {

            if (!_.isString(phone)) reject('The provided body needs to be a string');

            if (autoEncode) {

                if (Platform.OS === 'android') {
                    body = encodeURIComponent(body)
                }

                body = encodeURIComponent(body);
            }

            url += Platform.OS === 'ios' ? `&body=${body}` : `?body=${body}`;
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