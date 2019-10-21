import React from 'react';
import { TiHomeOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
      <div className="inline-box">
        <h1>F</h1>
        <h2 className="arial">
          lash
        </h2>
        <h1>C</h1>
        <h2 className="arial">ard</h2>
        <h1 className="p1">P</h1>
        <h2 className="arial">ro</h2>
      </div>
      <div className="button-box">
        <Link to='/' className="link-home">
          <h1><TiHomeOutline /></h1>
        </Link>
        <Link to='/stack-form' className="link-stack">
          <h4>Create A Stack</h4>
        </Link>
      </div> 
    </Container>          
  );
}

export default Header;