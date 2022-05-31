import React from 'react';
import Counter from './Counter.jsx';

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={15} interval={100} />
      <Counter start={13} interval={2000} />
    </>
  );
};

export default App;
