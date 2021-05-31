import React, { useEffect, useState } from 'react';

function About(props) {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(' About mounted');

    setCounter(100);
  }, []);

  return <div>About Page {counter}</div>;
}

export default About;
