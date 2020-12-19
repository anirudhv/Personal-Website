import React, {useState} from "react";
import {NavLink as Linker} from 'react-router-dom';
import classes from './Navigation.module.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import {Avatar} from '@material-ui/core';

const Navigation = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
  return (
  	 <div className = {classes.Navigation}>
      <Navbar color="dark" dark expand="lg">
        <NavbarBrand> 
        <Avatar alt = "Anirudh Venkataramanan" src = "images/Me.png" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <center>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Linker className = {classes.Linker} to ="/" exact activeStyle = {{
              	fontWeight:"bold",
              	backgroundColor:"black"
              }}>
              Home
              </Linker>
            </NavItem>
            <NavItem>
              <Linker className = {classes.Linker} to ="/experience" activeStyle = {{
              	fontWeight:"bold",
              	backgroundColor:"black"
              }}>
              Work Experience
              </Linker>
            </NavItem>
            <NavItem>
              <Linker className = {classes.Linker} to ="/projects" activeStyle = {{
              	fontWeight:"bold",
              	backgroundColor:"black"
              }}>
              Projects
              </Linker>
            </NavItem>  
 			<NavItem>
              <Linker className = {classes.Linker} to ="/skills" exact activeStyle = {{
              	fontWeight:"bold",
              	backgroundColor:"black"
              }}>
              Skills
              </Linker>
            </NavItem> 
            <NavItem>
              <Linker className = {classes.Linker} to ="/coursework" activeStyle = {{
              	fontWeight:"bold",
              	backgroundColor:"black"
              }}>
              Relevant Coursework
              </Linker>
            </NavItem>
          </Nav>
          </center>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;