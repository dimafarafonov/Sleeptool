import React from 'react';

import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import { pallete } from 'utils/brand-book';

import { MenuItem } from './components/MenuItem';

const menuArray = [1, 1, 1, 1, 1, 1];

const HomeScreen = () => {
  return (
    <SafeAreaViewContainer>
      <Container
        colors={[
          pallete.midnightBlueGreen,
          pallete.wildBlueYonder,
          pallete.midnightBlueGreen,
        ]}
        locations={[0, 1, 0]}>
        <MenuContainer>
          {menuArray.map((_, index) => (
            <MenuItem text={'GUIDE'} index={index} />
          ))}
        </MenuContainer>
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
