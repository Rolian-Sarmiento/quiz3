import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import navbarbg from '../images/navbarbg.png';
import './Header.css';

function Header() {
  const [isPortrait, setIsPortrait] = useState(window.innerWidth < 768 && window.innerHeight > window.innerWidth);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth < 768 && window.innerHeight > window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    setShowMobileMenu(false);
  };

  return (
    <Navbar
      expand="md"
      style={{
        backgroundImage: `url(${navbarbg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '80px',
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" height="80" className="d-inline-block align-top" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
