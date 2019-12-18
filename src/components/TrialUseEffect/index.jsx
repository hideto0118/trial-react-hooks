import React, { useState, useEffect } from 'react';

export const TrialUseEffect = () => {
  const [flag, setFlag] = useState(false);

  useEffect (() => {
      console.log('before');
      return () => console.log('after');
    },
    [flag]
    );

  return (
    <>
      {console.log('rendering')}
      <p>flag: {flag ? 'true' : 'false'}</p>
      <button onClick={() => setFlag(!flag)}>Click me!</button>
    </>
  );
};