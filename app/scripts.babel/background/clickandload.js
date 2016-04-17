'use strict';

var filter = {urls: ['<all_urls>']};
var opt_extraInfoSpec = ['requestBody', 'blocking'];
var requestCallBack = function (details) {
    if (details.url.indexOf('127.0.0.1:9666/jdcheck.js') != -1 ||
        details.url.indexOf('localhost:9666/jdcheck.js') != -1) {
        console.log('pycheck!');
        console.log(details.url);
        return {
            redirectUrl: chrome.extension.getURL('scripts/jdcheck.js')
        };
    }

};

chrome.webRequest.onBeforeRequest.addListener(requestCallBack, filter, opt_extraInfoSpec);