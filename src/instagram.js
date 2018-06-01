'use strict';

/**
 * Supported Deep Links based on https://www.instagram.com/developer/mobile-sharing/iphone-hooks/
 */

import {
    Platform
} from 'react-native';

import {
    Launch,
    LaunchString
} from './launcher';

import _ from 'lodash';

/**
 * @type {string}
 */
const INSTAGRAM_APP = 'instagram://app';

/**
 * @type {string}
 */
const INSTAGRAM_CAMERA = 'instagram://camera';

/**
 * @type {string}
 */
const INSTAGRAM_MEDIA = 'instagram://media?id=';

/**
 * @type {string}
 */
const INSTAGRAM_USER = 'instagram://user?username=';

/**
 * @type {string}
 */
const INSTAGRAM_LOCATION = 'instagram://location?id=';

/**
 * @type {string}
 */
const INSTAGRAM_TAG = 'instagram://tag?name=';



/**
 * Launches a Instagram User profile request
 * @param user
 * @returns {Promise}
 */
const Instagram = (user) =>
{
    return LaunchString('user', INSTAGRAM_USER + user);
}


/**
 * Launches a Instagram Media request
 * @param media
 * @returns {Promise}
 */
const InstagramMedia = (media) =>
{
    return LaunchString('media', INSTAGRAM_MEDIA + media);
}


/**
 * Launches a Instagram Location request
 * @param location
 * @returns {Promise}
 */
const InstagramLocation = (location) =>
{
    return LaunchString('location', INSTAGRAM_LOCATION + location);
}


/**
 * Launches a Instagram Tag request
 * @param tag
 * @returns {Promise}
 */
const InstagramTag = (tag) => 
{
    return LaunchString('tag', INSTAGRAM_TAG + tag);
}


/**
 * Launches the Instagram App
 * @returns {Promise}
 */
const InstagramApp = () => 
{
    return new Promise((resolve, reject) => {

        Launch(INSTAGRAM_CAMERA).then(() => resolve()).catch(error => reject(error));
    });
}


/**
 * Launches the Instagram Camera
 * @returns {Promise}
 */
const InstagramCamera = () =>
{
    return new Promise((resolve, reject) => {

        Launch(INSTAGRAM_CAMERA).then(() => resolve()).catch(error => reject(error));
    });
}




/**
 * @exports
 */
export {
    Instagram,
    InstagramMedia,
    InstagramApp,
    InstagramCamera,
    InstagramTag,
    InstagramLocation
}