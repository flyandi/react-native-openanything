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
const EMAIL = 'mailto:';


/**
 * Launches an email request
 * @param to
 * @param subject
 * @param body
 * @param cc
 * @param bcc
 * @returns {Promise}
 */
const Email = (to = false, subject = false, body = false, cc = false, bcc = false) => {

    return new Promise((resolve, reject) => {

        let url = EMAIL;
        let params = [];

        if(to) {
            url += encodeURIComponent(_.isArray(to) ? to.join(",") : to);
        }

        if(cc) {
            params.push('cc=' + encodeURIComponent(_.isArray(cc) ? cc.join(",") : cc));
        }

        if(bcc) {
            params.push('bcc=' + encodeURIComponent(_.isArray(bcc) ? bcc.join(",") : bcc));
        }

        if(subject) {
            params.push('subject=' + encodeURIComponent(subject));
        }

        if(body) {
            params.push('body=' + encodeURIComponent(body));
        }

        if(params.length > 0) {
            url += "?" + params.join("&");
        }

        Launch(url).then(() => resolve()).catch(error => reject(error));
    });
}


/**
 * @exports
 */
export {
    Email
}