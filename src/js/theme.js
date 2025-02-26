const lightBtn = document.querySelector('.light-btn');
const darkBtn = document.querySelector('.dark-btn');
const root = document.documentElement;

const toggleDark = () => {
	lightBtn.classList.toggle('animate-light');
	darkBtn.classList.toggle('animate-dark');
	root.style.setProperty('--clr-navy-900', 'hsl(220, 40%, 13%)');
	root.style.setProperty('--clr-white', 'hsl(0, 0%, 100%)');
	root.style.setProperty('--clr-light-200', 'hsl(228, 100%, 98%)');
	root.style.setProperty('--clr-background', 'hsl(222, 41%, 20%)');
	root.style.setProperty('--clr-navy-700', 'hsl(222, 41%, 20%)');
	root.style.setProperty('--clr-light-100', 'hsl(0, 0%, 100%)');
	root.style.setProperty('--clr-link-text', 'hsl(0, 0%, 100%)');
	root.style.setProperty('--clr-icon', 'hsl(0, 0%, 100%)');
};
const toggleLight = () => {
	lightBtn.classList.toggle('animate-light');
	darkBtn.classList.toggle('animate-dark');
	root.style.setProperty('--clr-navy-900', '#F6F8FF');
	root.style.setProperty('--clr-white', 'hsl(220, 40%, 13%)');
	root.style.setProperty('--clr-light-200', 'hsl(217, 35%, 45%)');
	root.style.setProperty('--clr-background', 'hsl(0, 0%, 100%)');
	root.style.setProperty('--clr-navy-700', 'hsl(0, 0%, 100%)');
	root.style.setProperty('--clr-light-100', 'hsl(220, 40%, 13%)');
	root.style.setProperty('--clr-link-text', 'hsl(217, 35%, 45%)');
	root.style.setProperty('--clr-icon', 'hsl(217, 35%, 45%)');
};
lightBtn.addEventListener('click', toggleLight);
darkBtn.addEventListener('click', toggleDark);
