import React from 'react';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <div>
      <Link to="register">register</Link>
      <Link to="login">register</Link>
      <Link to="contacts">contacts</Link>
    </div>
  );
};

export default HomeView;
