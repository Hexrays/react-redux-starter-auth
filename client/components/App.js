import React from 'react';

import Header from './Header';

const App = React.createClass({
  render() {
    return (
      <div >
        <Header title="React Redux Auth" />
        {React.cloneElement(this.props.children, { ...this.props, children: this.props.children.props.children })}
      </div>
    );
  }
});

export default App;