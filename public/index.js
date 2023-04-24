window.addEventListener('scroll', () => {
	let displayHeight = window.scrollY + document.documentElement.clientHeight;
	const moveIt = document.querySelectorAll('.--move');
	for (const id in moveIt) {
		if (Object.hasOwnProperty.call(moveIt, id)) {
			const el = moveIt[id];
			if (Math.round(el.getBoundingClientRect().bottom) <= displayHeight) {
				el.style.transform = null;
				el.style.opacity = null;
				console.log(el.getBoundingClientRect().bottom + '---------' + displayHeight);
			}
		}
	}
});

window.addEventListener('DOMContentLoaded', () => {
	const first = document.querySelectorAll('.card--move');
	for (const key in first) {
		if (Object.hasOwnProperty.call(first, key)) {
			const el = first[key];
			el.style.transform = null;
			el.style.opacity = null;
		}
	}
	delete first;
	const nav = document.querySelectorAll('.nav__item');
	for (const key in nav) {
		if (Object.hasOwnProperty.call(nav, key)) {
			const el = nav[key];
			el.addEventListener('click', () => {
				switch (Number(key)) {
					case 0:
						document.querySelector('.intro').scrollIntoView()
						break;
					case 1:
						document.querySelector('.pricelist').scrollIntoView()
						break;
					case 2:
						document.querySelector('.company').scrollIntoView()
						break;
					case 3:
						document.querySelector('.testimonials').scrollIntoView()
						break;
					case 4:
						document.querySelector('.questions').scrollIntoView()
						break;
					default:
						break;
				}
			})
		}
	}
})