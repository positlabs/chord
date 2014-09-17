export default class BaseView extends Backbone.View {

	// TODO: common view methods? 

	initialize(){
		document.body.appendChild(this.el);
	}

	render(){
		console.log('BaseView.render');
	}

}

