class RequestCtl {

    requestCallBack(details) {
        if (details) {
            let request = window.superagent();
            if (details.url.indexOf('127.0.0.1:9666/jdcheck.js') != -1 ||
                details.url.indexOf('localhost:9666/jdcheck.js') != -1) {
                console.log('pycheck!');
                console.log(details.url);
                return {
                    redirectUrl: chrome.extension.getURL('scripts/jdcheck.js')
                };
            } else if (details.url.indexOf('127.0.0.1:9666/flash/addcrypted2') != -1 || details.url.indexOf('localhost:9666/flash/addcrypted2') != -1) {
                console.log(details.requestBody.formData);
                request.post('http://192.168.1.4:8000')
                    .send({username: 'andy', password: 'schlafen'})
                    .set('Accept', 'application/json')
                    .end(function (err, res) {
                        console.log(err);
                        console.log(res);
                    });
            } else if (details.url.indexOf('http://127.0.0.1:9666/flash/add') != -1 || details.url.indexOf('http://localhost:9666/flash/add') != -1) {
                console.log(details.requestBody.formData);
            }
        };
    }
}

let filter = {urls: ['<all_urls>']};
let opt_extraInfoSpec = ['requestBody', 'blocking'];
let requestCtl = new RequestCtl();
chrome.webRequest.onBeforeRequest.addListener(requestCtl.requestCallBack, filter, opt_extraInfoSpec);