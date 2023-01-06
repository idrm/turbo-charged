import * as RadixToggleGroup from '@radix-ui/react-toggle-group'
import { ComponentProps } from 'react'
import tw from 'twin.macro'
import { withStyles } from './comps'

const styles = {
  root: [
    tw`
      py-2 px-3 z-0
      text-neutral-boosted bg-neutral-pale
      disabled:(cursor-not-allowed)
      border-l-[1px] border-l-neutral-muted
      first-of-type:(rounded-l border-l-0)
      last-of-type:(rounded-r)
      data-[state="on"]:(
        bg-neutral text-pale border-l-neutral
      )
      [&[data-state="on"]+*]:(
        border-l-neutral-pale
      )
      focus-visible:(
        outline-none
      )
      focus:(
        shadow-[0_0_0_2px_var(--action-muted)]
        z-10
      )
    `,
    { label: 'ToggleGroupItemRoot' },
  ],
}

export default withStyles(
  styles,
  'ToggleGroupItem',
)<ComponentProps<typeof RadixToggleGroup.Item>>(
  ({ styles, className, children, ...rest }) => (
    <RadixToggleGroup.Item css={styles.root} className={className} {...rest}>
      {children}
    </RadixToggleGroup.Item>
  ),
)
