import React, { useState } from 'react';

export const TrialUseState = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </>
  );
};