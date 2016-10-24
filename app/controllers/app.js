export default class AppController {
  // The setup for our new instance
  /**
   * appElement: Element : An element wrapping the entire application HTML
   */
  constructor(appElement) {
    this.appElement = appElement;
    this.model = [];
  }

  start() {
    // Grab our data from the API
    fetch('http://tiny-tn.herokuapp.com/collections/rt-bpm')
      .then((res) => res.json())
      // fat arrow with no {} is short hand for
      // .then((anything) => {
      //   return anything.json();
      // })
      .then((data) => {
        this.model = data;
        debugger;
      });

    // When the data comes back let's set up some views to show that data
    // Render the views once they are created

    // Setup a view to handle our form being submitted
  }
}
