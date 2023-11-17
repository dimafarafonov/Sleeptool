import React from 'react';
import { Alert, TextProps } from 'react-native';
import { PressableProps, Pressable } from 'react-native';

import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import { pallete } from 'utils/brand-book';


const NUMBER_OF_CEILS_TO_PAINT_TOP_COLOR_GRADIENT = -1;

interface IMenuItem {
  gradientContainerProps?: LinearGradientProps;
  pressHandlerContainerProps?: PressableProps;
  text: string;
  index: number;
}

const MenuItem = ({
  gradientContainerProps,
  pressHandlerContainerProps,
  text,
  index,
}: IMenuItem) => (
  <MenuItemContainer {...gradientContainerProps}>
    <MenuItemTouchHandler
      {...pressHandlerContainerProps}
      onPress={()=> Alert.alert('Click')}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
          backgroundColor: 'rgba(237, 238, 242, 0.2);',
        },
      ]}>
      <MenuItemText index={index}>{text.toLocaleUpperCase()}</MenuItemText>
    </MenuItemTouchHandler>
  </MenuItemContainer>
);

export { MenuItem };

const MenuItemContainer = styled(LinearGradient).attrs(
  (props: LinearGradientProps) => {
    const { locations, colors, ...rest } = props;
    return {
      colors: colors
        ? colors
        : [
            pallete.wildBlueYonder,
            pallete.midnightBlueGreen,
            pallete.wildBlueYonder,
          ],
      locations: locations ? locations : [0, 1, 0],
      ...rest,
    };
  },
)`
  width: 45%;
  height: 25%;
  border-color: ${pallete.mintCream};
  border-width: 4px;
  margin-vertical: 10px;
  border-radius: 10px;
`;

const MenuItemTouchHandler = styled(Pressable).attrs(
  (props: PressableProps) => ({
    ...props,
  }),
)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const MenuItemText = styled.Text.attrs(
  (textProps: TextProps): TextProps => ({
    ...textProps,
  }),
)`
  align-items: center;
	color:${({ index }: { index: number }) =>
    index > NUMBER_OF_CEILS_TO_PAINT_TOP_COLOR_GRADIENT
      ? pallete.mintCream
      : pallete.wildBlueYonder}
  font-weight: bold;
	font-size: 24px;
`;
