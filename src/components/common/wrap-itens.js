import React, { Component, Fragment } from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native';

const SectionHome = styled.View`
  margin-bottom:25px;
`
const WrapText = styled.View`
  padding-left: 15;
  margin-bottom:0;
`
const TitleSection = styled.Text`
  color: #fff;
  font-size:14px;
`
const SubTitleSection = styled.Text`
  color: #5A5B60;
  font-size:14px;

`
const AllContainer = styled.View`
  align-self: flex-start;
  display: flex;
  flex-direction: row;

`
const ImageContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const Image = styled.Image`
  width: 75;
  height: 100;
  margin-left: 5;
  margin-right: 5;
  margin-top: 10;
`;

class WrapItens extends Component {


  constructor(props) {
    super(props);

  }

  render() {

    const {title,  subtitle, data} = this.props
  
    return (
      <Fragment>
          <SectionHome>
              <WrapText>
                <TitleSection>{title}</TitleSection>
                { subtitle &&  <SubTitleSection>{subtitle}</SubTitleSection> }
               
              </WrapText>

              <AllContainer> 
                  <ScrollView horizontal={true}>
                      <ImageContainer>
                      {data.map((show, index) => (
                          <TouchableOpacity key={index}  onPress={() =>this.props.navigation.navigate('DetailScreen', show)}  >
                              <Image source={show.image} key={index} />
                          </TouchableOpacity>
                      ))}
                      </ImageContainer>
                </ScrollView>

              </AllContainer>

          </SectionHome>
      </Fragment>
    );
  }
}

export default WrapItens;