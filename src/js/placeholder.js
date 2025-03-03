import { searchInput } from './fetchAPI-min.js';

const updatePlaceholder = () => {
	const width = window.innerWidth;
	if (width < 290) {
		searchInput.placeholder = 'Search Git...';
	} else if (width < 330) {
		searchInput.placeholder = 'Search GitHub...';
	} else if (width < 360) {
		searchInput.placeholder = 'Search GitHub user...';
	} else {
		searchInput.placeholder = 'Search GitHub username';
	}
};

window.addEventListener('resize', updatePlaceholder);
