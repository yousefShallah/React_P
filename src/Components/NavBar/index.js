import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import {NavBarSection , Container , Logo, LogoText, Item, Choose, Ul , StyledNavLink } from './style'

const NavBar = () =>{
    return(
        <NavBarSection>
            <Container>
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <Ul>
                    <Item><Link to="/" className="link">Home</Link></Item>
                    <Item><Choose href="#">Work</Choose></Item>
                    <Item><Choose href="#">PortfoItemo</Choose></Item>
                    <Item><Choose href="#">Resume</Choose></Item>
                    <Item><Choose href="#">About</Choose></Item>
                    <Item><Link to="/contact" className="link">Contact</Link></Item>
                </Ul>
                
            </Container>
            
        </NavBarSection>
    )
}
export default NavBar;