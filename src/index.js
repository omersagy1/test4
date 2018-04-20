import React from 'react';
import ReactDOM from 'react-dom';

const NUM_ROWS = 3;
const NUM_COLS = 10;

function Cell() {
  return <span>O</span>;
}

function Row(num_cells) {
  let cells = [];
  for (let i = 0; i < num_cells; i++) {
    cells.push(Cell());
  }
  return <div>{cells}</div>
}

function Grid(num_rows, num_columns) {
  let rows = [];
  for (let i = 0; i < num_rows; i++) {
    rows.push(Row(num_columns));
  }
  return <div>{rows}</div>
}

function App() {
  return Grid(NUM_ROWS, NUM_COLS);
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
