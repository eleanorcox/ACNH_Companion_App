// Sample fonts, change as needed
import {PixelRatio} from 'react-native';
export const scaleFont = size => size * PixelRatio.getFontScale();

// FONT FAMILY
export const FONT_FAMILY = 'Roboto';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT_BOLD,
};
