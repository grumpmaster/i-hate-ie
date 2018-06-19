const hateCountIndicator = document.getElementById('hate-count-indicator');
const button = document.getElementById('i-hate-ie-button');

function displayHateCount(hateCount) {
	hateCountIndicator.innerHTML = Number(hateCount).toLocaleString();
}

const API_BASE_URL = 'https://IHateIE--grumpmaster.repl.co';

fetch(`${API_BASE_URL}/hatecount`)
	.then(response => response.json())
	.then(data => displayHateCount(data.hateCount));

button.addEventListener('click', () => {
	fetch(`${API_BASE_URL}/ihateietoo`, { method: 'POST' })
		.then(response => response.json())
		.then(data => displayHateCount(data.hateCount));
});
