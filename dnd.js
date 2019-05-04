// const config = require('./config');
import config from './config';

// const config = {};

class Dnd {
  constructor(options) {
    this.options = Object.assign({}, config, options);
    this.initOption();
  }

  initOption() {
    if (!this.options.bag) {
      return;
    }

    const { bag } = this.options;
    const $bags = document.querySelectorAll(`[bag="${bag}"]`);

    if (!$bags || $bags.length <= 0) {
      return;
    }

    $bags.forEach($b => Array.from($b.children).forEach($bc => $bc.setAttribute('draggable', true)));
    $bags.forEach($b => $b.addEventListener('dragstart', this.dragstart.bind(this)));
    $bags.forEach($b => $b.addEventListener('dragover', this.dragover.bind(this)));
    $bags.forEach($b => $b.addEventListener('drop', this.drop.bind(this)));
  }

  dragstart(e) {
    console.log('Start');
    // this.$currentElement = e.currentTarget;
    this.$currentElement = e.target;
  }

  dragover(e) {
    e.preventDefault();
  }

  drop(e) {
    console.log('Drop');
    this.$targetElement = e.currentTarget;
    this.options.drop({ name: 'my data', elm: this.$currentElement, target: this.$targetElement });
    const $copyElm = this.options.copy ? this.$currentElement.cloneNode(true) : this.$currentElement;
    console.log(this.$currentElement)
    this.$targetElement.appendChild($copyElm);
    // console.log(this.$targetElement)
    this.$currentElement = null;
  }

}

export default Dnd;