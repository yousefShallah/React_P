import styled from 'styled-components';

export const WorkSection = styled.div `
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff;
`
export const WorkTittle = styled.h2 `
    font-size: 35px; 
    margin-top: 0px;    

`

export const WTittleSpan = styled.span `
    font-weight: normal

`
export const Part = styled.div `
    margin-top: 20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5%;
    margin-left : ${props => props.first === 1 ? '0px' : '5%'}

`
export const Continer = styled.div `
    width: 85%;
    margin : auto;

`
export const Icon = styled.i `
    color: #888;
    margin-bottom: 20px;
`
export const PartTittle = styled.h4 `
     font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px;
`
export const Line = styled.hr `
    width: 60%;
    margin: auto;
    margin-bottom: 20px;

`
export const DescPart = styled.p `
    font-size: 14px;
    color: #888;
    padding: 20px;
`
