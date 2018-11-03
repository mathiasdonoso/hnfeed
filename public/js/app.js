const app = {
  showButton(element) {
    const button = element.getElementsByTagName('button')[0];
    button.hidden = false;
  },
  hideButton(element) {
    const button = element.getElementsByTagName('button')[0];
    button.hidden = true;
  },
};

window.app = app;
