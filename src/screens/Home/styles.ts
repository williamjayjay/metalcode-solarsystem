import styled from "styled-components/native"

export const ContainerImage = styled.ImageBackground`
flex:1;
`

export const Container = styled.View `
background-color:rgba(8,8,8,0.85) ;
height:100% ;

`

export const ContainerScroll = styled.ScrollView.attrs({
  contentContainerStyle:{
    alignItems:"center"
  },

  showsVerticalScrollIndicator:false
})
`

height:100%;
padding: 2px 16px;
`

