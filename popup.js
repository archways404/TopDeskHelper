// popup.js

document.getElementById('processButton').addEventListener('click', () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(
			tabs[0].id,
			{ action: 'processText' },
			function (response) {
				console.log('Response:', response);
				// Optionally update the popup's display with the new response
				document.getElementById('output').textContent =
					response.text || 'No response text';
			}
		);
	});
});
