import * as RadixToggleGroup from '@radix-ui/react-toggle-group'
import { ComponentProps } from 'react'
import tw from 'twin.macro'
import { withStyles } from './comps'

const styles = {
  root: [
    tw`
      flex
    `,
    { label: 'ToggleGroupRoot' },
  ],
}

export default withStyles(
  styles,
  'ToggleGroup',
)<ComponentProps<typeof RadixToggleGroup.Root>>(
  ({ styles, className, children, ...rest }) => (
    <RadixToggleGroup.Root css={styles.root} className={className} {...rest}>
      {children}
    </RadixToggleGroup.Root>
  ),
)
