import {
  amber,
  amberDark,
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  indigo,
  indigoDark,
  lime,
  limeDark,
  pink,
  pinkDark,
  red,
  redDark,
  sand,
  sandDark,
} from '@radix-ui/colors'

const rangeArray = new Array(12)

export type HueRange = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
]

export type ColorMode = 'light' | 'dark'

export type HueColors = Record<ColorMode, HueRange>

export type Hue =
  | 'blue'
  | 'red'
  | 'green'
  | 'sand'
  | 'gray'
  | 'indigo'
  | 'lime'
  | 'amber'
  | 'pink'

export type ColorPalette = Record<Hue, HueColors>

const colorBlueprints = {
  blue: [blue, blueDark],
  red: [red, redDark],
  green: [green, greenDark],
  sand: [sand, sandDark],
  gray: [gray, grayDark],
  indigo: [indigo, indigoDark],
  lime: [lime, limeDark],
  amber: [amber, amberDark],
  pink: [pink, pinkDark],
}

const Colors = Object.keys(colorBlueprints).reduce((cols, col) => {
  cols[col] = {
    light: rangeArray.map(
      (_, idx) => ((colorBlueprints as any)[col][0] as any)[`${col}${idx + 1}`],
    ),
    dark: rangeArray.map(
      (_, idx) => ((colorBlueprints as any)[col][1] as any)[`${col}${idx + 1}`],
    ),
  }
  return cols
}, {} as any) as ColorPalette

export default Colors
