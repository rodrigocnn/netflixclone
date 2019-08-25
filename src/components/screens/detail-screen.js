import React, { Component } from 'react'
import {View, Text} from 'react-native'
import styled from 'styled-components/native';
import WrapItens from './../common/wrap-itens'
import data from './../../data/data'
const STRANGER_THINGS = require('../../../assets/images/stranger-things.jpeg');

const Container = styled.View`
  display:flex;
  height:100%;
  background-color: #000;
`

const ImageContainer = styled.View`
  display:flex;
  height:40%;
  margin: 0 auto;

`
const Image = styled.Image`
  width: 75;
  height: 100;
  margin-left: 5;
  margin-right: 5;
  margin-top: 10;
`;

const DetailContent = styled.View`
  background-color: #595a5e;
  height:200;
  color:#fff;
  padding:10px;
`
const TitleSummary = styled.Text`
  color:#fff;
  margin-bottom:10px;
  
`
const Summary = styled.Text`
  color:#fff;
  margin-bottom:10px;
  
`
const Starring = styled.Text`
  color:#000;
  margin-bottom:10px;
`

const Creator = styled.Text`
  color:#000;
`

class DetailScreen extends Component {
  constructor(props) {
    super(props)
    
  }


  render() {
    const { params } = this.props.navigation.state;
      
    return (
      <Container>
        <ImageContainer>
            <Image source={params.image}  />
        </ImageContainer>

        <DetailContent>
          <TitleSummary > Resumo </TitleSummary>  
          <Summary> {params.summary }  </Summary>
          <Starring> Estrelando: {params.starring} </Starring>
          <Creator> Criação : {params.creator} </Creator>

        </DetailContent>

      </Container>
    )
  }
}

export default DetailScreen;