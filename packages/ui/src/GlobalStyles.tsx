import { Global } from '@emotion/react'
import React from 'react'
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro'
import { COLORS } from './colors'
import radixColors from './radixColors'

function createPalette(colorMode: 'light' | 'dark') {
  const colors = (['blue', 'red'] as const).map(hue => ({
    name: hue,
    contrasts: {
      max: radixColors[hue][colorMode][11],
      boosted: radixColors[hue][colorMode][10],
      default: radixColors[hue][colorMode][9],
      muted: radixColors[hue][colorMode][7],
      pale: radixColors[hue][colorMode][3],
    },
  }))
  return colors
    .map(col => {
      return Object.keys(col.contrasts)
        .map(
          contrast =>
            `--col-${col.name}-${contrast}: ${
              (col.contrasts as any)[contrast]
            }`,
        )
        .join('\n')
    })
    .join('\n')
}

const customStyles = css`
  :root {
    --inter-font: Inter;
  }
  .light {
    --color-min: ${COLORS.light.min};
    --color-max: ${COLORS.light.max};
    --bg-default: ${COLORS.light.background.default};
    --bg-muted: ${COLORS.light.background.muted};
    --bg-pale: ${COLORS.light.background.pale};
    --text-default: ${COLORS.light.text.default};
    --text-boosted: ${COLORS.light.text.boosted};
    --text-subdued: ${COLORS.light.text.subdued};
    --text-muted: ${COLORS.light.text.muted};
    --text-pale: ${COLORS.light.text.pale};
    --action-default: ${COLORS.light.action.default};
    --action-boosted: ${COLORS.light.action.boosted};
    --action-max: ${COLORS.light.action.max};
    --action-muted: ${COLORS.light.action.muted};
    --action-pale: ${COLORS.light.action.pale};
    --danger-default: ${COLORS.light.danger.default};
    --danger-boosted: ${COLORS.light.danger.boosted};
    --danger-max: ${COLORS.light.danger.max};
    --danger-muted: ${COLORS.light.danger.muted};
    --danger-pale: ${COLORS.light.danger.pale};
    --warning-default: ${COLORS.light.warning.default};
    --warning-boosted: ${COLORS.light.warning.boosted};
    --warning-max: ${COLORS.light.warning.max};
    --warning-muted: ${COLORS.light.warning.muted};
    --warning-pale: ${COLORS.light.warning.pale};
    --success-default: ${COLORS.light.success.default};
    --success-boosted: ${COLORS.light.success.boosted};
    --success-max: ${COLORS.light.success.max};
    --success-muted: ${COLORS.light.success.muted};
    --success-pale: ${COLORS.light.success.pale};
    --neutral-default: ${COLORS.light.neutral.default};
    --neutral-boosted: ${COLORS.light.neutral.boosted};
    --neutral-max: ${COLORS.light.neutral.max};
    --neutral-muted: ${COLORS.light.neutral.muted};
    --neutral-pale: ${COLORS.light.neutral.pale};
    --pastel1-default: ${COLORS.light.pastel1.default};
    --pastel1-max: ${COLORS.light.pastel1.max};
    --pastel1-boosted: ${COLORS.light.pastel1.boosted};
    --pastel1-muted: ${COLORS.light.pastel1.muted};
    --pastel2-default: ${COLORS.light.pastel2.default};
    --pastel2-max: ${COLORS.light.pastel2.max};
    --pastel2-boosted: ${COLORS.light.pastel2.boosted};
    --pastel2-muted: ${COLORS.light.pastel2.muted};
    --pastel3-default: ${COLORS.light.pastel3.default};
    --pastel3-max: ${COLORS.light.pastel3.max};
    --pastel3-boosted: ${COLORS.light.pastel3.boosted};
    --pastel3-muted: ${COLORS.light.pastel3.muted};
    --pastel4-default: ${COLORS.light.pastel4.default};
    --pastel4-max: ${COLORS.light.pastel4.max};
    --pastel4-boosted: ${COLORS.light.pastel4.boosted};
    --pastel4-muted: ${COLORS.light.pastel4.muted};
    --pastel5-default: ${COLORS.light.pastel5.default};
    --pastel5-max: ${COLORS.light.pastel5.max};
    --pastel5-boosted: ${COLORS.light.pastel5.boosted};
    --pastel5-muted: ${COLORS.light.pastel5.muted};
    ${createPalette('light')}
  }
  .dark {
    --color-min: ${COLORS.dark.min};
    --color-max: ${COLORS.dark.max};
    --bg-default: ${COLORS.dark.background.default};
    --bg-muted: ${COLORS.dark.background.muted};
    --bg-pale: ${COLORS.dark.background.pale};
    --text-default: ${COLORS.dark.text.default};
    --text-boosted: ${COLORS.dark.text.boosted};
    --text-subdued: ${COLORS.dark.text.subdued};
    --text-muted: ${COLORS.dark.text.muted};
    --text-pale: ${COLORS.dark.text.pale};
    --action-default: ${COLORS.dark.action.default};
    --action-boosted: ${COLORS.dark.action.boosted};
    --action-max: ${COLORS.dark.action.max};
    --action-muted: ${COLORS.dark.action.muted};
    --action-pale: ${COLORS.dark.action.pale};
    --danger-default: ${COLORS.dark.danger.default};
    --danger-boosted: ${COLORS.dark.danger.boosted};
    --danger-max: ${COLORS.dark.danger.max};
    --danger-muted: ${COLORS.dark.danger.muted};
    --danger-pale: ${COLORS.dark.danger.pale};
    --warning-default: ${COLORS.dark.warning.default};
    --warning-boosted: ${COLORS.dark.warning.boosted};
    --warning-max: ${COLORS.dark.warning.max};
    --warning-muted: ${COLORS.dark.warning.muted};
    --warning-pale: ${COLORS.dark.warning.pale};
    --success-default: ${COLORS.dark.success.default};
    --success-boosted: ${COLORS.dark.success.boosted};
    --success-max: ${COLORS.dark.success.max};
    --success-muted: ${COLORS.dark.success.muted};
    --success-pale: ${COLORS.dark.success.pale};
    --neutral-default: ${COLORS.dark.neutral.default};
    --neutral-boosted: ${COLORS.dark.neutral.boosted};
    --neutral-max: ${COLORS.dark.neutral.max};
    --neutral-muted: ${COLORS.dark.neutral.muted};
    --neutral-pale: ${COLORS.dark.neutral.pale};
    --pastel1-default: ${COLORS.dark.pastel1.default};
    --pastel1-max: ${COLORS.dark.pastel1.max};
    --pastel1-boosted: ${COLORS.dark.pastel1.boosted};
    --pastel1-muted: ${COLORS.dark.pastel1.muted};
    --pastel2-default: ${COLORS.dark.pastel2.default};
    --pastel2-max: ${COLORS.dark.pastel2.max};
    --pastel2-boosted: ${COLORS.dark.pastel2.boosted};
    --pastel2-muted: ${COLORS.dark.pastel2.muted};
    --pastel3-default: ${COLORS.dark.pastel3.default};
    --pastel3-max: ${COLORS.dark.pastel3.max};
    --pastel3-boosted: ${COLORS.dark.pastel3.boosted};
    --pastel3-muted: ${COLORS.dark.pastel3.muted};
    --pastel4-default: ${COLORS.dark.pastel4.default};
    --pastel4-max: ${COLORS.dark.pastel4.max};
    --pastel4-boosted: ${COLORS.dark.pastel4.boosted};
    --pastel4-muted: ${COLORS.dark.pastel4.muted};
    --pastel5-default: ${COLORS.dark.pastel5.default};
    --pastel5-max: ${COLORS.dark.pastel5.max};
    --pastel5-boosted: ${COLORS.dark.pastel5.boosted};
    --pastel5-muted: ${COLORS.dark.pastel5.muted};
    ${createPalette('dark')}
  }
  body {
    ${{
      ...tw`font-sans bg text transition-all duration-200`,
    }}
  }
  #root {
  }
`

const GlobalStyles = () => (
  <React.Fragment>
    <BaseStyles />
    <Global styles={customStyles} />
  </React.Fragment>
)

export default GlobalStyles
