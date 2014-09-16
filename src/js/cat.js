import {Animal} from 'animal.js'

export class Cat extends Animal {
  hide() {
  	console.log('Cat.hide()');
    this.hidden = true;
  }
}
