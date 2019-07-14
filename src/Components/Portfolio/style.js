import styled from 'styled-components';

export const ProtfolioSection = styled.div `
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
    width: 85%;
    margin: auto;
`

export const ProtTittle = styled.h2 `
    text-align: center;
    font-size: 35px;

`
export const ProtTittleSpan = styled.span `
    font-weight: normal;

`
export const ProtList = styled.ul `
    list-style: none;
    text-align: center;
    margin: 20px 0;

`
export const ProtItem = styled.li `
    display: inline-block;
    width: 100px;
    padding: 10px;
    background: ${ props => props.active ? '#eb5424' : ''}
    color: ${ props => props.active ? '#fff' : '#000'}
`
/*
/// .active 
.portfolio .portfolio-list .portfolio-item.active {
    background: #eb5424;
    color: #fff
}*/

export const Box = styled.div `
    width: 100%;
    float: left;
    font-size: 0;
    position: relative;

    
`
export const BoxProt = styled.div `
    width: 25%;
    float: left;  
`
export const Image = styled.img `
    width: 100%;

`


