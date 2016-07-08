chrome.browserAction.onClicked.addListener(function () {
    chrome.storage.sync.get({
        protocol: '',
        address: '',
        port: ''
    }, function (items) {
        chrome.tabs.create({
            url: items.protocol + '://' + items.address + ':' + items.port
        });
    });
});