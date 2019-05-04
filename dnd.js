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

    $bags.forEach($b => $b.addEventListener('dragstart', this.dragstart.bind(this)));
    $bags.forEach($b => $b.addEventListener('dragover', this.dragover.bind(this)));
    $bags.forEach($b => $b.addEventListener('drop', this.drop.bind(this)));
  }

  dragstart() {
    console.log('Start');
  }

  dragover(e) {
    e.preventDefault();
  }

  drop() {
    console.log('Drop');
    this.options.drop({ name: 'my data' });
  }

}

export default Dnd;