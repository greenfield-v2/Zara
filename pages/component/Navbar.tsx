import React from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    console.log("hi")
  return (
    <div>
      <Navbar bg="white" expand="lg" variant='light' className='navbares'>
              <Container fluid>
                <Navbar.Brand href="#" >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png" style={{marginLeft:"100px",width:"200px",height:"90px"}}/></Navbar.Brand>
               
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
              {/*When the user clicks on the Link */}
                   <Nav.Link href="/"  style={{ color:"black",fontFamily:"Sans-serif",fontSize:"15px", marginLeft:"50px"}}> HOME </Nav.Link>
                  </Nav>
               
                 <Nav.Link href="#action1" style={{fontFamily:"Sans-serif",fontSize:"15px", marginRight:"60px",textDecoration:"underline"}}> RECHERCHER    </Nav.Link>

                  <Nav.Link href="#action1" style={{ fontFamily:"Sans-serif",fontSize:"15px"}} >SE CONNECTER</Nav.Link>
                  <img src="https://cdn-icons-png.flaticon.com/512/118/118089.png" style={{marginLeft:"80px",width:"40px",height:"40px"}}/>

                </Navbar.Collapse>
              </Container>
            </Navbar>
            </div>
          )
}
  

export default NavBar