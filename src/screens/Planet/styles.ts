import styled from "styled-components/native"


export const Container = styled.View `
background-color:rgba(8,8,8,0.85) ;
height:100% ;

`

export const ContainerScroll = styled.ScrollView.attrs({
  contentContainerStyle:{
    alignItems:'center'
  },
  showsVerticalScrollIndicator:false


})
`
height:100%;
padding: 2px 16px;

`


export const HeaderPlanetPage = styled.View`
flex-direction:row ;
justify-content:space-between ;
width:100%;
margin-bottom:16px ;
`

export const ColumnNameAndDescription = styled.View`
max-width:60% ;
`

export const TitlePlanet  = styled.Text.attrs({
  numberOfLines:1
})
`
font-size:42px ;
font-weight:700 ;
color:#F5F6F7;
flex-shrink:1 ;
`

export const ColumnMoon = styled.View`
padding-top:12px ;
max-width:25% ;
align-items:flex-end ;

`

export const RowMoon = styled.View`
flex-direction:row ;
align-items:center ;
`


export const TextMoons  = styled.Text.attrs({
  numberOfLines:1
})
`
font-size:16px ;
font-weight:400 ;
color:#F5F6F7;
flex-shrink:1 ;
`

export const DescriptionPlanet  = styled.Text.attrs({
  numberOfLines:10
})
`
font-size:16px ;
font-weight:200 ;
color:#F5F6F7;
flex-shrink:1 ;
`

export const ContainerImagePlanet = styled.View`
height:400px;
width:100%;
margin: 8px 0px;
`

export const ImageLargePlanet = styled.Image`
height:100%;
width:100%;
`


export const ContainerStatus = styled.View`
width:100%;
border-width:1px ;
border-color:#F5F6F7 ;
border-radius:4px ;
padding:16px;
align-items:center ;
flex-direction:row ;
margin: 12px 0px;

`

export const TitleStatus  = styled.Text.attrs({
  numberOfLines:1
})
`
font-size:20px ;
font-weight:200 ;
color:#F5F6F7;
margin:0px 16px 0px 8px;
flex-shrink:1 ;
`


export const ValueStatus  = styled.Text.attrs({
  numberOfLines:3
})
`
font-size:20px ;
font-weight:600 ;
color:#F5F6F7;
flex-shrink:1 ;
`