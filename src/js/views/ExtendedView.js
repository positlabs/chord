import BaseView from 'views/BaseView.js';

export default class ExtendedView extends BaseView {

	constructor(){
		
		// overrides the actual constructor for Backbone.View.
		// probably a bad idea not to call super()
		// should use initialize() instead

		super();

	}

	initialize(){
		super();

		// define object properties here because we're using actual classes, not merging objects
		this.model = new (Backbone.Model.extend({}))({ 
			hello: 'hello world!',
			spacer: ' | ',
			list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		});

		this.events = {
			click: 'onClick'
		};

	}

	render(){
		console.log('ExtendedView.render');
		super(); // calls BaseView.render()

		var m = this.model.attributes;

		// multi-line html!
		var html = `
			<h1>ExtendedView</h1>
			<p>${m.hello}</p>
		`;

		// iteration! notice binding of 'this' with fat arrow
		this.model.get('list').forEach(item => 
			html += `${item}${this.model.get('spacer')}`
		);

		this.el.innerHTML = html;

	}

	onClick(){
		console.log('ExtendedView.onClick');
	}

}

