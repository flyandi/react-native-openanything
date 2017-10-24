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
const ANDROID_URI = 'https://www.google.com/maps/search/?api=1&query=';

/**
 * @type {string}
 */
const IOS_URI = 'http://maps.apple.com/?q='


/**
 * Launches a map request
 * @param address
 * @returns {Promise}
 */
const Map = (address) =>
{
    return new Promise((resolve, reject) => {

        let url = '';

        if(Platform.OS == 'ios') {
            url  = IOS_URI;
        } else if (Platform.OS == 'android') {
            url = ANDROID_URI;
        } else {
            reject("Map is not supported on this device");
        }

        if(_.isArray(address)) {
            if(address.length != 2) return reject("An map array has to contain the latitude and longitude.");
            address = address.join(",");
        }

        url += encodeURIComponent(address);

        Launch(url).then(() => resolve()).catch(error => reject(error));
    });
}


/**
 * @exports
 */
export {
    Map
}