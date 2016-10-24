export default class ResultListView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    // Loop through our model
    this.model.forEach((result) => {
      // Create a new result row
      const row = document.createElement('tr');
      row.classList.add('result');

      row.innerHTML = `
        <td class="result__time"></td>
        <td class="result__user"></td>
        <td class="result__bpm"></td>`;
      // Fill the row with data
      row.querySelector('.result__time').innerText = result.time;
      row.querySelector('.result__user').innerText = result.user;
      row.querySelector('.result__bpm').innerText = result.bpm;

      // Append the new result row to the existing list element
      this.el.appendChild(row);
    });
  }
}
