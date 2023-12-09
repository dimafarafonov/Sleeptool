import React from 'react';
import { Text, View, ScrollView, NativeModules, Pressable } from 'react-native';

import { useQuery, gql } from '@apollo/client';

import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import { pallete } from 'utils/brand-book';

import { MenuItem } from './components/MenuItem';

const { CalendarModule } = NativeModules;

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

const CheckCalendarNativeLogs = () => {
  return CalendarModule.createCalendarEvent('Sleeptool name', 'Kyiv location');
};

const HomeScreen = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  return (
    <SafeAreaViewContainer>
      <Pressable onPress={CheckCalendarNativeLogs}>
        <Text style={{ textAlign: 'center' }}>CheckLogs</Text>
      </Pressable>
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
  justify-content: center;
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
