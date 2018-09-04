//
// to include them using webpack
//
import '../scss/app.scss';

import Accordion from './accordion';

export default class Main {

  static load() {
    this.accordion = new Accordion();
  }
}

//
// export to window object to be accessible
//
window.main = Main;
