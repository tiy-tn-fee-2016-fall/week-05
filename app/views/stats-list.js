const isFirstOccurance = (current, index, arr) => {
  return arr.indexOf(current) === index;
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
  }
}
