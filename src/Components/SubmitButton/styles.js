import styled from 'styled-components';

export const Button = styled.button`
background-color:#1b262c;
border-radius:3px;
color:#fff;
height:32px;
display:block;
width:70%;
text-align:center;
margin:0 auto;
margin-top:5px;

&[disabled]{
    opacity: .3;
}
`