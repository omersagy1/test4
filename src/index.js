import React from 'react';
import ReactDOM from 'react-dom';

import { GridApp } from './grid.js';
import { SpanList } from './poly.js';

ReactDOM.render(
  <div>
    <SpanList />
    <GridApp />
  </div>,
  document.getElementById('root')
);
