const isFirstOccurance = (current, index, arr) => {
  return arr.indexOf(current) === index;
};

const greater = (a, b) => {
  if (a > b) {
    return a;
  }

  return b;
};

const lesser = (a, b) => {
  if (a < b) {
    return a;
  }

  return b;
};

class UserView {
  constructor(model) {
    this.model = model;

    this.el = document.createElement('li');
    this.el.classList.add('users__item');
  }

  render() {
    this.el.innerText = this.model;
  }
}

export default class StatsList {
  constructor(el, model, controller) {
    this.el = el;
    this.model = model;
    this.controller = controller;
  }

  render() {
    // Clear out the users list
    const usersList = this.el.querySelector('.users');
    usersList.innerHTML = '';

    // Get an array of JUST user names
    const allUsers = this.model.map((r) => r.user);
    // Find the unique user names in the array of all users
    const uniqueUsers = allUsers.filter(isFirstOccurance);

    // Create list items for each unique user
    uniqueUsers.forEach((user) => {
      const view = new UserView(user);
      view.render();

      usersList.appendChild(view.el);
    });

    const maxBpm = this.model
      .map((r) => parseInt(r.bpm))
      .reduce(greater);

    const minBpm = this.model
      .map((r) => parseInt(r.bpm))
      .reduce(lesser);

    this.el.querySelector('.max-heartrate').innerText = `Max: ${maxBpm}`;
    this.el.querySelector('.min-heartrate').innerText = `Min: ${minBpm}`;

    const add = (a, b) => a + b;

    const sum = this.model
      .map((r) => parseInt(r.bpm))
      .reduce(add);

    const avgBpm = sum / this.model.length;

    this.el.querySelector('.avg-heartrate').innerText = `Avg: ${avgBpm}`;
  }
}
