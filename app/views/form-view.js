export default class FormView {
  constructor(el, controller) {
    this.el = el;
    this.controller = controller;

    // Traditional function binding
    // function onsubmit(ev) {
    //   // Stops the form form actually submitting
    //   ev.preventDefault();
    //
    //   const user = this.el.querySelector('#home-form-user').value;
    //
    //   console.log(user);
    // }
    //
    // // Setup some events
    // this.el.addEventListener('submit', onsubmit.bind(this));

    // With a fat arrow this stays the same
    const onsubmit = (ev) => {
      // Stops the form form actually submitting
      ev.preventDefault();

      // Get input values
      const user = this.el.querySelector('#home-form-user').value;
      const bpm = this.el.querySelector('#home-form-bpm').value;

      // Delegate the logging of the heartrate to the controller
      this.controller.logHeartrate(user, bpm);

      // Empty the inputs so the user can type in again
      this.el.querySelector('#home-form-user').value = '';
      this.el.querySelector('#home-form-bpm').value = '';
    };

    this.el.addEventListener('submit', onsubmit);
  }
}
