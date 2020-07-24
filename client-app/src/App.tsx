import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <div>
      <h2 className="ui header">
        <i aria-hidden="true" className="users icon"></i>
        <div className="content">Reactivities</div>
      </h2>
    </div>
  );
}

export default App;
