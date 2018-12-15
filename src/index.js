import * as React from 'react';
import * as ReactDOM from 'react-dom';


class App extends React.Component {

  render = () => {

    return (
      <div>Pet Projects is a place where you can find a project for practicing your development skills</div>
    );
  };
}


ReactDOM.render(<App/>, document.getElementById('root'));
