const searchImg = document.querySelector('.search-img');
const searchInput = document.querySelector('.search-input');
const inputError = document.querySelector('.error');
const searchBtn = document.querySelector('.search-btn');
const githubName = document.querySelector('.github-name');
const githubLink = document.querySelector('.github-link');
const githubAvatar = document.querySelector('.github-user-avatar');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const userBio = document.querySelector('.user-bio');
const reposAmount = document.querySelector('.repos');
const followersAmount = document.querySelector('.followers');
const followingAmount = document.querySelector('.following');
const links = document.querySelectorAll('.link-description');

let initialUser = 'octocat';

const fetchAPI = async (initialUser) => {
	try {
		const URL = `https://api.github.com/users/${initialUser}`;
		const res = await fetch(URL);
		const rateLimitRemaining = res.headers.get('X-RateLimit-Remaining');
		console.log(rateLimitRemaining);

		if (res.status === 404) {
			inputError.style.display = 'block';
			return;
		} else {
			inputError.style.display = 'none';

			const data = await res.json();
			console.log(data);
			const newData = new Date(data.created_at);
			const newDay = newData.getDate();
			const newMonth = newData
				.toLocaleString('en-US', { month: 'long' })
				.slice(0, 3);
			const newYear = newData.getFullYear();

			if (data.name === null || data.name === '') {
				githubName.textContent = data.login;
			} else {
				githubName.textContent = data.name;
			}
			githubLink.textContent = '@' + data.login;
			day.textContent = newDay;
			month.textContent = newMonth;
			year.textContent = newYear;
			if (data.bio === null) {
				userBio.textContent = 'This profile has no bio';
				userBio.style.opacity = '0.7';
			} else {
				userBio.textContent = data.bio;
			}
			githubAvatar.src = data.avatar_url;
			reposAmount.textContent = data.public_repos;
			followersAmount.textContent = data.followers;
			followingAmount.textContent = data.following;

			const linksArr = [...links];
			const fetchedLinksArr = [
				data.location,
				data.blog,
				data.twitter_username,
				data.company,
			];

			fetchedLinksArr.forEach((link, index) => {
				const item = linksArr[index];
				if (link === null || link === '') {
					item.textContent = 'Not available';
					item.href = link ? link : '#';
					item.style.opacity = '0.5';
					const svg = item.previousElementSibling.querySelector('svg');
					svg.style.opacity = '0.5';
				} else {
					item.textContent = link;
					item.href = link;
					item.style.opacity = '1';
					const svg = item.previousElementSibling.querySelector('svg');
					svg.style.opacity = '1';
				}
			});
		}
	} catch (error) {
		console.error('API error:', error);
	}
};

// - **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

searchBtn.addEventListener('click', () => {
	initialUser = searchInput.value;
	if (searchInput.value === '' || searchInput.value === 0) {
		inputError.style.display = 'block';
		return;
	} else {
		fetchAPI(initialUser);
	}
	searchInput.value = '';
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		searchBtn.click();
	}
});

document.addEventListener('DOMContentLoaded', fetchAPI(initialUser));
searchImg.addEventListener('click', () => {
	searchInput.focus();
});
