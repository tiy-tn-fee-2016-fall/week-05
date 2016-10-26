import ResultListView from '../views/result-list';
import StatsList from '../views/stats-list';
import FormView from '../views/form-view';

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
    // Create an empty result view
    this.resultView = new ResultListView(this.appElement.querySelector('.results-table__list'), this.model);
    // Setup a view to handle our form being submitted
    this.formView = new FormView(this.appElement.querySelector('.home-form'), this);
    // Setup a view for stats
    this.statsView = new StatsList(this.appElement.querySelector('.info'), this.model, this);

    // Grab our data from the API
    fetch('http://tiny-tn.herokuapp.com/collections/rt-bpm')
      .then((res) => res.json())
      // fat arrow with no {} is short hand for
      // .then((anything) => {
      //   return anything.json();
      // })
      .then((data) => {
        this.model = data;
        // Update the model backing the result list
        this.resultView.model = this.model;
        this.statsView.model = this.model;

        // Tell the result list to re-render
        this.resultView.render();
        this.statsView.render();
      });
  }

  logHeartrate(user, bpm) {
    fetch('http://tiny-tn.herokuapp.com/collections/rt-bpm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, bpm, time: new Date() }),
    }).then((res) => res.json())
      .then((data) => {
        // Update the controller model to be the old results PLUS the newly submitted one
        // The "..." or spread operator pulls out all of the items from an array in order
        this.model = [data, ...this.model];

        // The resultView needs to be informed of the model change
        this.resultView.model = this.model;
        this.statsView.model = this.model;

        // Now that the model has changed, our resultView should re-render
        this.resultView.render();
        this.statsView.render();
      });
  }
}
