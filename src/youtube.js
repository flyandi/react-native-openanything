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
const YOUTUBE = 'http://www.youtube.com/v/';



/**
 * Launches a youtube request
 * @param video
 * @returns {Promise}
 */
const Youtube = (video) =>
{
    return new Promise((resolve, reject) => {

        const url = YOUTUBE + video;

        Launch(url).then(() => resolve()).catch(error => reject(error));
    });
}


/**
 * @exports
 */
export {
    Youtube
}