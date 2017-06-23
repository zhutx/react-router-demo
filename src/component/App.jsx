import React from 'react';
import Nav from './Nav';

const App = ({ children }) => {
    return (
      <div>
        <Nav />
        <div>{children}</div>
      </div>
    );
};

export default App;
