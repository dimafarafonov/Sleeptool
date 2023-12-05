import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import { useQuery, gql } from '@apollo/client';

import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import { pallete } from 'utils/brand-book';

import { MenuItem } from './components/MenuItem';

const menuArray = [1, 1, 1, 1, 1, 1];

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const HomeScreen = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(loading);
  console.log(error);
  console.log(data);

  return (
    <SafeAreaViewContainer>
      <Container
        colors={[
          pallete.midnightBlueGreen,
          pallete.wildBlueYonder,
          pallete.midnightBlueGreen,
        ]}
        locations={[0, 1, 0]}>
        {/* <MenuContainer>
          {menuArray.map((_, index) => (
            <MenuItem text={'GUIDE'} index={index} key={index}/>
          ))}
        </MenuContainer> */}
        <ScrollView>
          {data.locations.map(({ id, name, description, photo }) => {
            return (
              <View>
                <Text>{id}</Text>
                <Text>{name}</Text>
                <Text>{description}</Text>
                <Text>{photo}</Text>
              </View>
            );
          })}
        </ScrollView>
      </Container>
    </SafeAreaViewContainer>
  );
};

const Container = styled(LinearGradient)`
  padding: 15px;
  flex: 1;
  justify-content: center;
`;

const SafeAreaViewContainer = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${pallete.grannySmithApple};
`;

const MenuContainer = styled.View`
  display: flex;
  height: 80%;
  padding: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;

export { HomeScreen };
