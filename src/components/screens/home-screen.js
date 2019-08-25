import React, { Component } from 'react'
import {View, Text} from 'react-native'
import styled from 'styled-components/native';
import WrapItens from './../common/wrap-itens'
import data from './../../data/data'

const Container = styled.View`
  display:flex;
  height:100%;
  background-color: #000;
`

class HomeScreen extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <Container>
          
            <WrapItens
              title="Mais Assistidos"   
              subtitle="Recomendados para você" 
              data={data}  
              navigation={this.props.navigation}> 
            </WrapItens>
            
            <WrapItens 
                title="Continue Assistindo"  
                data={data}  
                navigation={this.props.navigation}> 
            </WrapItens>
            
            <WrapItens 
              title="Adicionados Recentemente "  
              data={data}  
              navigation={this.props.navigation}> 
            </WrapItens>
      
          </Container>
    )
  }
}

export default HomeScreen;