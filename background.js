chrome.browserAction.onClicked.addListener(function(tab) {
    var options = {
        "originTypes": {
            "unprotectedWeb": true,
            "protectedWeb": true,
            "extension": true
        },
        "since": 0
    };

    var dataToRemove = {
        "appcache": true,
        "cache": true,
        "cookies": true,
        "downloads": true,
        "fileSystems": true,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": true,
        "pluginData": true,
        "passwords": true,
        "webSQL": true
    };

    chrome.browsingData.remove(options, dataToRemove, function() {
        console.log('Cache cleared');
        chrome.tabs.reload(tab.id); // Refresh the current tab
    });
});