import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return (
            <React.Fragment>
              <Navbar color="light" light expand="md" className="sticky-top" >
                <NavbarBrand href="/">SRD</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>

                  <Nav className="text-right ml-auto" navbar>
                    <NavItem> 
                      <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contact">Contacts</NavLink>
                    </NavItem>
                    <NavItem> 
                      <NavLink href="/about">About</NavLink>
                    </NavItem>
                  </Nav>

                </Collapse>
              </Navbar>
            </React.Fragment>
          );
        }