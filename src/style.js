// style.js
import { Dimensions, StyleSheet } from 'react-native';

export const textStyles = StyleSheet.create({
  //#region Text-XS
  text_xs_light: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '300',
    fontFamily: 'Inter_300Light',
  },
  text_xs_regular: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    fontFamily: 'Inter_400Regular',
  },
  text_xs_medium: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
  },
  text_xs_semibold: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  text_xs_bold: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  text_xs_link: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontFamily: 'Inter_700Bold',
  },
  text_xs_strike: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_700Bold',
  },
  //#endregion

  //#region Text-SM
  text_sm_light: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '300',
    fontFamily: 'Inter_300Light',
  },
  text_sm_regular: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'Inter_400Regular',
  },
  text_sm_medium: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
  },
  text_sm_semibold: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  text_sm_bold: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  text_sm_link: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontFamily: 'Inter_700Bold',
  },
  text_sm_strike: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_700Bold',
  },
  //#endregion

  //#region Text-Base
  text_base_light: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '300',
    fontFamily: 'Inter_300Light',
  },
  text_base_regular: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    fontFamily: 'Inter_400Regular',
  },
  text_base_medium: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
  },
  text_base_semibold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  text_base_bold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  text_base_link: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontFamily: 'Inter_700Bold',
  },
  text_base_strike: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_700Bold',
  },
  //#endregion

  //#region Text-LG
  text_lg_light: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '300',
    fontFamily: 'Inter_300Light',
  },
  text_lg_regular: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '400',
    fontFamily: 'Inter_400Regular',
  },
  text_lg_medium: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
  },
  text_lg_semibold: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  text_lg_bold: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  text_lg_link: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontFamily: 'Inter_700Bold',
  },
  text_lg_strike: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '700',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_700Bold',
  },
  //#endregion

  //#region Text-XL
  text_xl_light: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '300',
    fontFamily: 'Inter_300Light',
  },
  text_xl_regular: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '400',
    fontFamily: 'Inter_400Regular',
  },
  text_xl_medium: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
  },
  text_xl_semibold: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  text_xl_bold: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  text_xl_link: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontFamily: 'Inter_700Bold',
  },
  text_xl_strike: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_700Bold',
  },
  //#endregion

  //#region Text-2XL
  text_2xl_light: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '300',
    fontFamily: 'Inter_300Light',
  },
  text_2xl_regular: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '400',
    fontFamily: 'Inter_400Regular',
  },
  text_2xl_medium: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
  },
  text_2xl_semibold: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  text_2xl_bold: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  text_2xl_link: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontFamily: 'Inter_700Bold',
  },
  text_2xl_strike: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_700Bold',
  },
  //#endregion

  //#region Text-3XL
  text_3xl_light: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '300',
    fontFamily: 'Inter_300Light',
  },
  text_3xl_regular: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '400',
    fontFamily: 'Inter_400Regular',
  },
  text_3xl_medium: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
  },
  text_3xl_semibold: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  text_3xl_bold: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  text_3xl_link: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontFamily: 'Inter_700Bold',
  },
  text_3xl_strike: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_700Bold',
  },
  //#endregion

  //#region Text-4XL
  text_4xl_light: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '300',
    fontFamily: 'Inter_300Light',
  },
  text_4xl_regular: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '400',
    fontFamily: 'Inter_400Regular',
  },
  text_4xl_medium: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
  },
  text_4xl_semibold: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  text_4xl_bold: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  text_4xl_link: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontFamily: 'Inter_700Bold',
  },
  text_4xl_strike: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_700Bold',
  },
  //#endregion

  //#region Text-5XL
  text_5xl_light: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '300',
    fontFamily: 'Inter_300Light',
  },
  text_5xl_regular: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '400',
    fontFamily: 'Inter_400Regular',
  },
  text_5xl_medium: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
  },
  text_5xl_semibold: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  text_5xl_bold: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  text_5xl_link: { 
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontFamily: 'Inter_700Bold',
  },
  text_5xl_strike: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700',
    textDecorationLine: 'line-through', 
    fontFamily: 'Inter_700Bold',
  },
  //#endregion
});

export const paddings = {
  p_0: 0,
  p_2: 2,
  p_4: 4,
  p_8: 8,
  p_12: 12,
  p_16: 16,
  p_20: 20,
  p_24: 24,
  p_28: 28,
  p_32: 32,
  p_36: 36,
  p_40: 40,
  p_44: 44,
  p_48: 48,
  p_56: 56,
  p_64: 64,
  p_80: 80,
  p_96: 96,
}

{/*
  
  const { width, height } = Dimensions.get('window');

// Example of scaling based on width (you can also scale based on height if needed)
const scaleFactor = width / 450; // 375 is the base width, adjust as needed

const responsivePadding = (size) => Math.round(size * scaleFactor);

export const paddings = {
  p_0: responsivePadding(0),
  p_2: responsivePadding(2),
  p_4: responsivePadding(4),
  p_8: responsivePadding(8),
  p_12: responsivePadding(12),
  p_16: responsivePadding(16),
  p_20: responsivePadding(20),
  p_24: responsivePadding(24),
  p_28: responsivePadding(28),
  p_32: responsivePadding(32),
  p_36: responsivePadding(36),
  p_40: responsivePadding(40),
  p_44: responsivePadding(44),
  p_48: responsivePadding(48),
  p_56: responsivePadding(56),
  p_64: responsivePadding(64),
  p_80: responsivePadding(80),
  p_96: responsivePadding(96),
};
*/}





export const colors = {
  white:   '#FFFFFF',
  black:   '#000000',
  transparent: 'transparent',
  //#region Grey
  grey50:  '#F6F6F6',
  grey100: '#EEEEEE',
  grey200: '#E2E2E2',
  grey300: '#CBCBCB',
  grey400: '#AFAFAF',
  grey500: '#757575',
  grey600: '#545454',
  grey700: '#333333',
  grey800: '#1F1F1F',
  grey900: '#141414',
  //#endregion
  //#region Red
  red50:   '#FFF2F1',
  red100:  '#FFE1DF',
  red200:  '#FFC8C5',
  red300:  '#FFA29D',
  red400:  '#FF6C64',
  red500:  '#FF2C20',
  red600:  '#ED2115',
  red700:  '#C8170D',
  red800:  '#A5170F',
  red900:  '#881A14',
  red950:  '#4B0804',
  //#endregion
  //#region Yellow
  yellow50: '#FFFFE7',
  yellow100: '#FEFFC1',
  yellow200: '#FFFD86',
  yellow300: '#FFF441',
  yellow400: '#FFE50D',
  yellow500: '#FFD600',
  yellow600: '#D19D00',
  yellow700: '#A67102',
  yellow800: '#89570A',
  yellow900: '#74470F',
  yellow950: '#442504',
  //#endregion
  //#region Green
  green50: "#E8FFE4",
  green100: "#CBFFC5",
  green200: "#9AFF92",
  green300: "#5BFF53",
  green400: "#24FB20",
  green500: "#00DD00",
  green600: "#00B505",
  green700: "#028907",
  green800: "#086C0C",
  green900: "#0C5B11",
  green950: "#003305",
  //#endregion
  
  //#region Violet
  violet50: "#F5F2FF",
  violet100: "#ECE8FF",
  violet200: "#DAD4FF",
  violet300: "#C1B1FF",
  violet400: "#A285FF",
  violet500: "#7E49FF",
  violet600: "#7630F7",
  violet700: "#681EE3",
  violet800: "#5718BF",
  violet900: "#48169C",
  violet950: "#2C086A"
  //#endregion
};

export const shadowStyles = StyleSheet.create({
  shadow_s: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  shadow_m: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  shadow_l: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export const rounded = StyleSheet.create({
  rounded_none: 0,
  rounded_sm: 2,
  rounded: 4,
  rounded_md: 8,
  rounded_lg: 12,
  rounded_xl: 16,
  rounded_2xl: 20,
  rounded_3xl: 24,
  rounded_4xl: 28,
  rounded_5xl: 32,
  rounded_full: 9999
});