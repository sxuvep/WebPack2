const button = document.createElement('button');
button.innerText = 'Click Me';

button.onclick = () => {
	System.import('./imageviewer.js').then(module => module.default());
};

document.body.appendChild(button);
