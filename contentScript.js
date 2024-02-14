// Assuming compromise is bundled with your content script
const nlp = require('compromise');

function processPageText() {
	const text = document.body.innerText; // Simple example: grab all text from the body
	const doc = nlp(text);
	const nouns = doc.nouns().out('array');
	console.log('Extracted Nouns:', nouns);
	console.log('Extracted Text:', text);
}

// Optional: Function to extract text based on specific element
const extractTextFromElement = () => {
	const element = document.getElementById('cCC_XL'); // Adjust the ID based on your needs
	return element ? element.innerText : '';
};

// Listen for messages from the background script or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === 'processText') {
		// Process the entire page's text
		processPageText();
	} else if (request.action === 'extractText') {
		// Extract text from a specific element and optionally process it
		const text = extractTextFromElement();
		// Example: Just sending the text back, but you can process it before sending
		sendResponse({ text: text });
	}
	// Ensure async response is handled properly
	return true;
});
