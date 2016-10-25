class ResultItemView {
  constructor(model) {
    // Setup the data for our CURRENT table table row
    this.model = model;

    // Setup our element for THE CURRENT row in our table
    this.el = document.createElement('tr');
    this.el.classList.add('result');

    this.el.innerHTML = `
      <td class="result__time"></td>
      <td class="result__user"></td>
      <td class="result__bpm"></td>`;
  }

  render() {
    this.el.querySelector('.result__time').innerText = this.model.time;
    this.el.querySelector('.result__user').innerText = this.model.user;
    this.el.querySelector('.result__bpm').innerText = this.model.bpm;
  }
}

export default class ResultListView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    // Loop through our model
    this.model.forEach((result) => {
      // Create a new result item view
      const row = new ResultItemView(result);
      row.render();

      // Append the new result row to the existing list element
      this.el.appendChild(row.el);
    });
  }
}
