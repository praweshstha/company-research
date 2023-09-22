document.getElementById('companyName').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        searchCompany();
    }
});

document.getElementById('searchBtn').addEventListener('click', searchCompany);
document.getElementById('socialMediaSearchBtn').addEventListener('click', socialMediaSearch); // New Event Listener

function searchCompany() {
    var companyName = document.getElementById('companyName').value;
    var queries = [
        'about', 'website', 'pissedconsumer', 'bbb', 'live chat', 'phone number',
        'email', 'privacy policy', 'terms and conditions', 'legal contact',
        'facebook', 'instagram', 'linkedin', 'tiktok', 'twitter', 'youtube'
    ];
    sendSearchQueries(companyName, queries);
}

function socialMediaSearch() { // New Function
    var companyName = document.getElementById('companyName').value;
    var queries = [
        'facebook', 'instagram', 'linkedin', 'tiktok', 'twitter', 'youtube'
    ];
    sendSearchQueries(companyName, queries);
}

function sendSearchQueries(companyName, queries) {
    chrome.runtime.sendMessage({ action: "searchCompany", companyName: companyName, queries: queries });
}
