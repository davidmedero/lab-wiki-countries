import React, { useEffect } from 'react';

function Contact(props) {
  useEffect(() => {
    console.log(' Contact mounted');
  }, []);
  return <div>Contact Page</div>;
}

export default Contact;
