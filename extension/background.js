// background.js
chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.sendMessage(tab.id, { action: 'extractText' }, (response) => {
		if (chrome.runtime.lastError) {
			// Handle any errors that might occur
			console.log('Error:', chrome.runtime.lastError);
		} else {
			console.log(response.text);
			// Here, you could send the extracted text to your server for processing
		}
	});
});
