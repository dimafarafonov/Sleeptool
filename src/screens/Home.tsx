import React from 'react';
import { Text, View, ScrollView, NativeModules, Pressable } from 'react-native';

import { useQuery, gql } from '@apollo/client';

import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import { pallete } from 'utils/brand-book';

import { MenuItem } from './components/MenuItem';

import RTNCalculator from 'rtn-calculator/js/NativeCalculator';

// TODO: https://reactnative.dev/docs/native-modules-android?android-language=kotlin#register-the-module-android-specific
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

const CheckCalendarNativeLogs = async () => {
  // return CalendarModule.createCalendarEvent('Sleeptool name', 'Kyiv location');
  const value = await RTNCalculator?.add(5, 10);
  console.log(value);
};

const HomeScreen = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
// suddenly i found out that "italic" prop only works on android due android system fonts, which recognize such props
// in contrast with iOS, which support some italic's, but fonts need to be installed manually 
  return (
    <SafeAreaViewContainer>
      <Pressable onPress={CheckCalendarNativeLogs} style={({ pressed }) => []}>
        <Text style={{ textAlign: 'center', fontStyle: 'italic' }}>  
          CheckLogsButton
        </Text>
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
