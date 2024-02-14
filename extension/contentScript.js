// contentScript.js

// Assuming compromise is bundled with your content script
const nlp = require('compromise');

function processPageText() {
	const text = document.body.innerText; // Simple example: grab all text from the body
	const doc = nlp(text);
	const nouns = doc.nouns().out('array');
	console.log('Extracted Nouns:', nouns);
	// Further processing and displaying results as needed
}

// Run the processing function or set it up to run in response to certain events
processPageText();

/*
const extractText = () => {
	const element = document.getElementById('cCC_XL'); // Adjust the ID based on your needs
	return element ? element.innerText : '';
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === 'extractText') {
		const text = extractText();
		sendResponse({ text: text });
	}
});
*/
