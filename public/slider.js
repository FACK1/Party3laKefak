
function myfunction(id) {
	const main = document.getElementById('main');
	const image1 = document.getElementById('image1');
	const image2 = document.getElementById('image2');
	const image3 = document.getElementById('image3');
	const image4 = document.getElementById('image4');

	image1.addEventListener('click' => {
		main.setAttribute('src', image1.getAttribute('src'));
		// e.target.appendChild(img);
	});

  image2.addEventListener('click' => {
		main.setAttribute('src', image2.getAttribute('src'));
		// e.target.appendChild(img);
	});

  image3.addEventListener('click' => {
		main.setAttribute('src', image3.getAttribute('src'));
		// e.target.appendChild(img);
	});

  image4.addEventListener('click' => {
		main.setAttribute('src', image4.getAttribute('src'));
		// e.target.appendChild(img);
	});
}
