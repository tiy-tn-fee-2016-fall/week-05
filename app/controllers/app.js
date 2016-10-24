import ResultListView from '../views/result-list';

export default class  {
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

        // Create our result list view and render!
        const resultView = new ResultListView(this.appElement.querySelector('.results-table__list'), this.model);

        resultView.render();
      });

    // Setup a view to handle our form being submitted
  }
}
