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

const location = document.querySelector('.location');
const blog = document.querySelector('.blog');
const twitter = document.querySelector('.twitter');
const twitterSvg = twitter.previousElementSibling.querySelector('svg');
const company = document.querySelector('.company');
const links = document.querySelectorAll('.link-des')

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

			githubName.textContent = data.name;
			githubLink.textContent = '@' + data.login;
			day.textContent = newDay;
			month.textContent = newMonth;
			year.textContent = newYear;
			if (data.bio === null) {
				userBio.textContent = 'This profile has no bio';
			} else {
				userBio.textContent = data.bio;
			}
			githubAvatar.src = data.avatar_url;
			reposAmount.textContent = data.public_repos;
			followersAmount.textContent = data.followers;
			followingAmount.textContent = data.following;
			location.textContent = data.location;

			const fetchedLinksArr = [
				data.twitter_username,
				data.company,
				data.blog,
				data.company,
			];
			console.log(fetchedLinksArr);
			fetchedLinksArr.forEach((link) => {
				if (link === null) {
					link.textContent = 'Not Available';
					link.style.opacity = '0.5';
					// twitterSvg.style.opacity = '0.5';
				}
			});

			// if (data.twitter_username === null) {
			// 	twitter.textContent = 'Not Available';
			// 	twitter.style.opacity = '0.5';
			// 	twitterSvg.style.opacity = '0.5';
			// } else {
			// 	twitter.style.opacity = '1';
			// 	twitterSvg.style.opacity = '1';
			// 	twitter.textContent = data.twitter_username;
			// }
			blog.textContent = data.blog;
			company.textContent = data.company;
		}
	} catch (error) {
		console.error('API error:', error);
	}
};

searchBtn.addEventListener('click', () => {
	initialUser = searchInput.value;
	if (searchInput.value === '' || searchInput.value === 0) {
		inputError.style.display = 'block';
		return;
	} else {
		fetchAPI(initialUser);
	}
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
