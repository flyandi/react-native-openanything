'use strict';

import {
    Linking
} from 'react-native';


/**
 * Returns if the url is supported
 * Returns a promise
 * @example instance.supported(url).then((supported) => {...});
 * @param url
 * @returns {*}
 */
const Supported = (url) =>
{
    return Linking.canOpenURL(url);
}

/**
 * Opens the requested url
 * Returns a promise
 * @example instance.open(url).then(() => {...});
 * @param url
 * @returns {Promise}
 */
const Open = (url) =>
{
    return Linking.openURL(url);
}


/**
 * Launches a requested url
 * @param url
 * @constructor
 */
const Launch = (url) =>
{
    return new Promise((resolve, reject) => {

        Supported(url).then(supported => {
            if (supported) {
                return Open(url);
            }
            reject();
        }).catch((error) => {
            reject(error);
        });
    });
}

/**
 * @exports
 */
export {
    Launch,
    Supported,
    Open
};