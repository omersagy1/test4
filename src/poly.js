import React from 'react';
import ReactDOM from 'react-dom';

export { SpanList };

class SpanList extends React.Component {

  constructor() {
    super();
    this.state = {
      display_list: [new XSpan(), new OSpan(), new XSpan()]
    }
  }

  render() {
    const spans = this.state.display_list.map(s => s.render());
    return <div>{spans}</div>
  }

}

class SpanDisplay extends React.Component {

  constructor() {
    super();
  }

}

class XSpan extends SpanDisplay {

  render() {
    return <span>X</span>;
  }

}

class OSpan extends SpanDisplay {

  render() {
    return <span>O</span>
  }

}
