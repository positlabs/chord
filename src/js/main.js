import '../../bower_components/backbone/backbone.js';

/*

	main entry point for the web-app 

*/

console.log('running main.js');

// testing module imports and classes
import {Cat} from 'cat.js'
var cat = new Cat();

// const and template string tests
const buttonLabel = 'hide the cat';
var buttonHTML = `
	<button class="cat-btn">${buttonLabel}</button>
`
document.body.innerHTML += buttonHTML;
var $button = $('.cat-btn');
$button.on('click', () => cat.hide());

// testing Backbone views
import {default as ExtendedView} from 'views/ExtendedView.js';
var exview = new ExtendedView();
exview.render();
