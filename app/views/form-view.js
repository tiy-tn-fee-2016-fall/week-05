export default class FormView {
  constructor(el) {
    this.el = el;

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

      const user = this.el.querySelector('#home-form-user').value;
      const bpm = this.el.querySelector('#home-form-bpm').value;

      fetch('http://tiny-tn.herokuapp.com/collections/rt-bpm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, bpm }),
      }).then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };

    this.el.addEventListener('submit', onsubmit);
  }
}
