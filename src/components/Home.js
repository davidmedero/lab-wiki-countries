import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
function Home(props) {
  useEffect(() => {
    console.log(' Home mounted');
  }, []);
  return (
    <div>
      Home
      <Link to="/country/ALB">Countries</Link>
    </div>
  );
}

export default Home;
