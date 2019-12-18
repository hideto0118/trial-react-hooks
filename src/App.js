import * as React from 'react';
import './App.css';

import { TrialUseEffect } from './components/TrialUseEffect/index';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TrialUseEffect initialValue={0} />
      </div>
    );
  }
}

export default App;