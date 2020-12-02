import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');
export const SIZE = 64;
export const ICON_SIZE = SIZE * 0.6;
export const SPACING = 16;

const S = width * 0.74;

export const tuturial2Specc = {
  ITEM_WIDTH: S,
  ITEM_HEIGHT: S * 1.5,
  RADIUS: 18,
  FULL_SIZE: S + SPACING * 2,
};
