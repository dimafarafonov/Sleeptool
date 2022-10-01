import React from 'react';
import { Text } from 'react-native';

import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import { pallete } from 'utils/brand-book';

const HomeScreen = () => {
  return (
    <>
      <SafeAreaViewContainerTop />
      <SafeAreaViewContainerBottom>
        <Container
          colors={[
            pallete.midnightBlueGreen,
            pallete.wildBlueYonder,
            pallete.midnightBlueGreen,
          ]}
          locations={[0.15, 0.7, 0.15]}>
          <Text>Home</Text>
        </Container>
      </SafeAreaViewContainerBottom>
    </>
  );
};

const Container = styled(LinearGradient)`
  padding: 15px;
  display: flex;
  height: 100%;
`;

const SafeAreaViewContainerTop = styled.SafeAreaView`
  background-color: ${pallete.midnightBlueGreen};
  display: flex;
  flex: 0;
`;

const SafeAreaViewContainerBottom = styled.SafeAreaView`
  background-color: ${pallete.wildBlueYonder};
  display: flex;
  flex: 1;
`;

export { HomeScreen };
