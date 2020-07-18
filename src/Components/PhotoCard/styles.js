import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'


export const Article = styled.article`
min-height:200px;
`


export const ImageWrapper = styled.div`
border-radius:10px;
display:block;
height:0;
overflow:hidden;
padding:56.25% 0 0 0;
position:relative;
width:90%;
margin:0 auto;
`

export const Img = styled.img`
${fadeIn({time: '2s'})}
box-shadow:0 10px 14px rgba(0, 0, 0, .2);
height: 100%;
object-fit:cover;
position:absolute;
top:0;
width: 100%;
`

