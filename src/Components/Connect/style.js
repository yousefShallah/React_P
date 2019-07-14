import styled from 'styled-components';

export const CotentSection = styled.div `
    padding: 50px 0;
    text-align: center;
    width: 100%;
    
`

export const ContentTittle = styled.h2 `
   font-size: 45px;
   margin-bottom: 30px;

`
export const ContentTittleSpan = styled.span `
   font-weight: normal;

`

export const Form = styled.form `
    width: 70%;
    margin: auto;
`

export const FormInput = styled.div `
   overflow: hidden;
   width: 100%;
   margin:0px;
   padding:0px;
   box-sizing: border-box;
   `

export const InputName = styled.input `
    width:49.5%;
    padding: 7px;
    box-sizing: border-box;
    float: left;
    margin-right: 1%;

`

export const InputEmail = styled.input `
   float: right;
   width: 49.5%;
   padding: 7px;
   box-sizing: border-box;

`

export const InputSubject = styled.input `
   width: 100%;
   margin-top: 10px;
   margin-bottom : 7px;
   padding: 7px;
   box-sizing: border-box;
`

export const TextArea = styled.textarea `
   width: 100%;
   outline: 0;
   background: #ddd;
   margin-bottom : 7px;
   padding: 7px;
   box-sizing: border-box;
`

export const InputSubmit = styled.input `
   width: 60%;
   background: #ddd;
   height : 40px;
   border: 1px solid #ccc;
   color: #888;
   cursor: pointer;
   margin-bottom: 20px;
   padding: 10px;

   &:hover {
    color: #252525;
    background: #ccc;

   }
`
