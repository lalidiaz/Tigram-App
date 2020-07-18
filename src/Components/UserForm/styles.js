import styled from 'styled-components';

export const Form = styled.form`
padding: 16px 0; 
`


export const Input = styled.input`
border: 1px solid #ccc;
border-radius:3px;
margin-bottom:8px;
padding:8px 4px;
display:block;
width:70%;
margin:0 auto;
margin-top:5px;

&[disabled]{
    opacity: .3;
}

`



export const Title = styled.h2`
font-size:16px;
font-weight:500;
padding: 8px 0;
padding-left:20px;
`

export const Error = styled.span`
font-size:14px;
color:#ff5f40;
font-weight:bold;
height: 30px;
text-align:center;
margin:0 auto;
padding-left:20px;

`