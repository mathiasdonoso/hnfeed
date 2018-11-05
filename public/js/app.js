const app = {
  showButton(element) {
    const button = element.getElementsByTagName('button')[0];
    button.hidden = false;
    element.classList.add('selected');
  },
  hideButton(element) {
    const button = element.getElementsByTagName('button')[0];
    button.hidden = true;
    element.classList.remove('selected');
  },
};

window.app = app;
