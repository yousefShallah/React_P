
import styled from 'styled-components';

export const NavBarSection = styled.div `
    padding: 0px ;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;
`

export const Container = styled.div `
    width: 85%;
    margin: auto;
`
export const Logo = styled.div `
    width: 50%;
    float: left;

`
export const LogoText = styled.h2 `
    font-size: 30px;
    font-weight: bold
`
export const Ul = styled.ul `
    width: 50%;
    float: left;
    list-style: none;
    padding: 0px;
    margin-top: 20px;
`

export const Item = styled.li `
    display: inline-block;

    
`
export const Choose = styled.a `
    display: block;
    color: #252525;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover{
        color: #faaaaa;
    }
`
/*
export const StyledNavLink = styled.Link `
    display: block;
    color: #252525;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover{
        color: #faaaaa;
    }

`*/

