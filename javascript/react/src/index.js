import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Main extends Component {
  render() {
    return (
      <div>h1!!!</div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);