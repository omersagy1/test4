import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'material-ui/Button';


const Cell = () => {
  return <span>O</span>;
}


const Row = ({num_cells}) => {
  let cells = [];
  for (let i = 0; i < num_cells; i++) {
    cells.push(<Cell/>);
  }
  return <div>{cells}</div>;
}


const Grid = ({num_rows, num_columns}) => {
  let rows = [];
  for (let i = 0; i < num_rows; i++) {
    rows.push(<Row num_cells={num_columns}/>);
  }
  return <div>{rows}</div>;
}


const ActionButton = ({callback, display_text}) => {
    return (
      <Button variant="raised"
              color="primary"
              onClick={callback}>
        {display_text}
      </Button>
    );
}



// High level app component. has messy state.
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      num_rows: 3,
      num_cols: 3
    }
    this.addRow = this.addRow.bind(this);
  }

  addRow() {
    this.setState(prev_state => ({
      num_rows: prev_state.num_rows + 1
    }));
  }

  render() {
    return (
      <div>
         <ActionButton callback={this.addRow}
                       display_text="add row" />
         <div>
            <Grid num_rows={this.state.num_rows} 
                  num_columns={this.state.num_cols}/>
         </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
