import * as RadixScrollArea from '@radix-ui/react-scroll-area'
import React from 'react'
import tw from 'twin.macro'
import { withStyles } from './comps'

const styles = {
  root: [tw`w-full h-full overflow-hidden`, { label: 'ScrollAreaRoot' }],
  viewport: [tw`w-full h-full`, { label: 'ScrollAreaViewport' }],
  scrollbar: [
    tw`
    flex select-none
    touch-none
    p-[2px]
    transition-all
    duration-200
    data-[orientation=horizontal]:(
      flex-col h-[10px]
    )
    data-[orientation=vertical]:(
      w-[10px]
    )
  `,
    { label: 'ScrollAreaScrollbar' },
  ],
  thumb: [
    tw`
      relative rounded-[10px]
      flex-[1] bg-neutral
      before:(
        content-[""]
        absolute
        top-[50%]
        left-[50%]
        -translate-x-1/2
        -translate-y-1/2
        w-full
        h-full
        min-w-[44px]
        min-h-[44px]
      )
    `,
    { label: 'ScrollAreaThumb' },
  ],
  corner: [tw``, { label: 'ScrollAreaCorner' }],
}

export default withStyles(
  styles,
  'ScrollArea',
)<{ children?: React.ReactNode }>(({ styles, className, children }) => (
  <RadixScrollArea.Root css={styles.root} className={className}>
    <RadixScrollArea.Viewport css={styles.viewport}>
      {children}
    </RadixScrollArea.Viewport>
    <RadixScrollArea.Scrollbar orientation="horizontal" css={styles.scrollbar}>
      <RadixScrollArea.Thumb css={styles.thumb} />
    </RadixScrollArea.Scrollbar>
    <RadixScrollArea.Scrollbar orientation="vertical" css={styles.scrollbar}>
      <RadixScrollArea.Thumb css={styles.thumb} />
    </RadixScrollArea.Scrollbar>
    <RadixScrollArea.Corner css={styles.corner} />
  </RadixScrollArea.Root>
))
