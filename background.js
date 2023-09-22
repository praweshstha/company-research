chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "searchCompany") {
        var companyName = message.companyName;
        var queries = message.queries;

        queries.forEach(function (query) {
            var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(companyName + ' ' + query);
            chrome.tabs.create({ url: searchUrl });
        });
    }
});
