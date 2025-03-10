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
  //#region Rose
  rose50:  '#FFF1F2',
  rose100: '#FFE4E6',
  rose200: '#FECDD3',
  rose300: '#FDA4AF',
  rose400: '#FB7185',
  rose500: '#F43F5E',
  rose600: '#E11D48',
  rose700: '#BE123C',
  rose800: '#9F1239',
  rose900: '#881337',
  rose950: '#4C0519',
  //#endregion
  //#region Pink
  pink50:  '#FDF2F8',
  pink100: '#FCE7F3',
  pink200: '#FBCFE8',
  pink300: '#F9A8D4',
  pink400: '#F472B6',
  pink500: '#EC4899',
  pink600: '#DB2777',
  pink700: '#BE185D',
  pink800: '#9D174D',
  pink900: '#831843',
  pink950: '#500724',
  //#endregion
  //#region Magenta
  magenta50:  '#FEF1F9',
  magenta100: '#FEE5F5',
  magenta200: '#FFCAED',
  magenta300: '#FF9FDB',
  magenta400: '#FF63C1',
  magenta500: '#FF27A0',
  magenta600: '#F01284',
  magenta700: '#D10568',
  magenta800: '#AD0755',
  magenta900: '#8F0C4A',
  magenta950: '#580028',
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
  violet950: "#2C086A",
  //#endregion
  //#region Blue
  blue50:  '#EDFAFF',
  blue100: '#D6F1FF',
  blue200: '#B5E9FF',
  blue300: '#83DCFF',
  blue400: '#48C7FF',
  blue500: '#1EA7FF',
  blue600: '#0689FF',
  blue700: '#0075FF',
  blue800: '#0859C5',
  blue900: '#0D4E9B',
  blue950: '#0E305D',
  //#endregion
  //#region Sky
  sky50:  '#F0F9FF',
  sky100: '#E0F2FE',
  sky200: '#BAE6FD',
  sky300: '#7DD3FC',
  sky400: '#38BDF8',
  sky500: '#3B82F6',
  sky600: '#2563EB',
  sky700: '#1D4ED8',
  sky800: '#1E40AF',
  sky900: '#1E3A8A',
  sky950: '#172554',
  //#endregion
  //#region Indigo
  indigo50:  '#EEF2FF',
  indigo100: '#E0E7FF',
  indigo200: '#C7D2FE',
  indigo300: '#A5B4FC',
  indigo400: '#818CF8',
  indigo500: '#6366F1',
  indigo600: '#4F46E5',
  indigo700: '#4338CA',
  indigo800: '#3730A3',
  indigo900: '#312E81',
  indigo950: '#1E1B4B',
  //#endregion
  //#region Purple
  purple50:  '#FAF5FF',
  purple100: '#F3E8FF',
  purple200: '#E9D5FF',
  purple300: '#D8B4FE',
  purple400: '#C084FC',
  purple500: '#A855F7',
  purple600: '#9333EA',
  purple700: '#7E22CE',
  purple800: '#6B21A8',
  purple900: '#581C87',
  purple950: '#3B0764',
  //#endregion
  //#region Fuchsia
  fuchsia50:  '#FDF4FF',
  fuchsia100: '#FAE8FF',
  fuchsia200: '#F5D0FE',
  fuchsia300: '#F0ABFC',
  fuchsia400: '#E879F9',
  fuchsia500: '#D946EF',
  fuchsia600: '#C026D3',
  fuchsia700: '#A21CAF',
  fuchsia800: '#86198F',
  fuchsia900: '#701A75',
  fuchsia950: '#4A044E',
  //#endregion
  //#region Orange
  orange50:  '#FFFAEC',
  orange100: '#FFF3D3',
  orange200: '#FFE3A5',
  orange300: '#FFCE6D',
  orange400: '#FFAD32',
  orange500: '#FF920A',
  orange600: '#F77A00',
  orange700: '#CC5802',
  orange800: '#A1440B',
  orange900: '#823A0C',
  orange950: '#461B04',
  //#endregion
  //#region Lime
  lime50:  '#F7FEE7',
  lime100: '#ECFCCB',
  lime200: '#D9F99D',
  lime300: '#BEF264',
  lime400: '#A3E635',
  lime500: '#84CC16',
  lime600: '#65A30D',
  lime700: '#4D7C0F',
  lime800: '#3F6212',
  lime900: '#365314',
  lime950: '#1A2E05',
  //#endregion
  //#region Emerald
  emerald50:  '#ECFDF5',
  emerald100: '#D1FAE5',
  emerald200: '#A7F3D0',
  emerald300: '#6EE7B7',
  emerald400: '#34D399',
  emerald500: '#10B981',
  emerald600: '#059669',
  emerald700: '#047857',
  emerald800: '#065F46',
  emerald900: '#064E3B',
  emerald950: '#022C22',
  //#endregion
  //#region Teal
  teal50:  '#F0FDFA',
  teal100: '#CCFBF1',
  teal200: '#99F6E4',
  teal300: '#5EEAD4',
  teal400: '#2DD4BF',
  teal500: '#14B8A6',
  teal600: '#0D9488',
  teal700: '#0F766E',
  teal800: '#115E59',
  teal900: '#134E4A',
  teal950: '#042F2E',
  //#endregion
  //#region Cyan
  cyan50:  '#ECFEFF',
  cyan100: '#CFFAFE',
  cyan200: '#A5F3FC',
  cyan300: '#67E8F9',
  cyan400: '#22D3EE',
  cyan500: '#06B6D4',
  cyan600: '#0891B2',
  cyan700: '#0E7490',
  cyan800: '#155E75',
  cyan900: '#164E63',
  cyan950: '#083344',
  //#endregion
  //#region Platinum
  platinum50:  '#F8FAFC',
  platinum100: '#F1F5F9',
  platinum200: '#E2E8F0',
  platinum300: '#CBD5E1',
  platinum400: '#94A3B8',
  platinum500: '#64748B',
  platinum600: '#475569',
  platinum700: '#334155',
  platinum800: '#1E293B',
  platinum900: '#0F172A',
  platinum950: '#020617',
  //#endregion
  //#region Brown
  brown50:  '#FBF6EF',
  brown100: '#F3E5D2',
  brown200: '#E5C9A2',
  brown300: '#D8A971',
  brown400: '#CF8E50',
  brown500: '#C5733B',
  brown600: '#B95E35',
  brown700: '#91412C',
  brown800: '#773529',
  brown900: '#622D25',
  brown950: '#371511',
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