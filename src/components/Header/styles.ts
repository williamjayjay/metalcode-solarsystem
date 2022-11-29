import styled from "styled-components/native"

export const Container = styled.View`
height:60px;
width:100%;
flex-direction:row ;
align-items:center ;
justify-content:space-between ;
padding: 0px 6px;
`

export const Title = styled.Text.attrs({
  numberOfLines:1
})
`
font-size:18px ;
color: rgba(255,255,255,0.50);
font-weight:400 ;
flex-shrink:1 ;

`

export const TitleComponent = styled.View`
flex-direction:row ;
`
