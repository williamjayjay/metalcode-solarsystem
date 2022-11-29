import styled from "styled-components/native"

export const Container = styled.View`
height:80px;
width: 100%;
flex-direction:row ;
align-items:center ;
justify-content:space-between ;
margin: 16px 0px;
border-bottom-width: 0.3px ;
border-color:rgba(255,255,255,0.3) ;

`

export const RowImageTitles = styled.View`
flex-direction:row ;
`

export const ImagePlanet = styled.Image`
height:60px;
width:60px;
border-radius:30px ;
`

export const ColumnTitles = styled.View`
margin-left:16px ;
width:68%;
`

export const Title = styled.Text.attrs({
  numberOfLines:1,
})
`
font-size:18px ;
color: #ddd;
font-weight:700 ;
flex-shrink:1 ;
`

export const Description = styled.Text.attrs({
  numberOfLines:1,
})
`
font-size:14px ;
color: rgba(255,255,255,0.5);
font-weight:100 ;
flex-shrink:1 ;
`