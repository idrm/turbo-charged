import React from 'react'
import tw from 'twin.macro'
import { withStyles } from './comps'

const styles = {
  root: [
    tw`
      relative rounded z-[1]
      shadow-none bg-neutral-pale
      before:(
        content-[""]
        rounded
        absolute
        top-0
        left-0
        right-0
        bottom-0
        bg-gradient-to-br
        from-neutral-pale
        to-neutral-muted
        transition-opacity
        duration-300
        opacity-0
        z-[-1]
        hover:(
          opacity-50
        )
      )
      hover:(
        shadow
      )
      transition-all duration-200`,
    { label: 'CardRoot' },
  ],
}

export default withStyles(
  styles,
  'Card',
)<{
  children?: React.ReactNode
}>(({ styles, className, children }) => (
  <div css={styles.root} className={className}>
    {children}
  </div>
))
