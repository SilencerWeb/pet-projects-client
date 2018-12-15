import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { GlobalStyles } from 'ui/theme';


class App extends React.Component {

  render = () => {

    return (
      <React.Fragment>
        <GlobalStyles/>

        <div>Pet Projects is a place where you can find a project for practicing your development skills</div>
      </React.Fragment>
    );
  };
}


ReactDOM.render(<App/>, document.getElementById('root'));
