import * as React from 'react';

const App = () => {
  return (
    <div>
      <button type="button">Click Me</button>
    </div>
  );
};

export default App;



const Button = ({ type = 'button', onClick, children }) => {
    console.log (
      <button type={type} onClick={onClick}>
        {children}
      </button>
    );
  };