import React, { useState } from 'react';

export const TrialUseState = ({ initialValue }) => {
  const [flag, setFlag] = useState(false);
  
  return (
    <>
      <p>Flag: {flag ? 'true' : 'false'}</p>
      <button onClick={() => setFlag(!flag)}>Click me!</button>
    </>
  );
};