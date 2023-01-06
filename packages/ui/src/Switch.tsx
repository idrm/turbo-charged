import * as RadixSwitch from '@radix-ui/react-switch'
import { ComponentProps, useCallback } from 'react'
import tw from 'twin.macro'
import { withStyles } from './comps'

export type SwitchVariant = 'onOff' | 'twoWay'

export type SwitchSize = 'sm' | 'base' | 'lg'

const styles = {
  root: [
    tw`
      relative inline-flex flex-shrink-0
      border-2 border-transparent
      rounded-full
      cursor-pointer
      transition-colors ease-in-out duration-75
      disabled:(cursor-not-allowed)
      [&[data-checked]]:(
        bg-action
        disabled:bg-action-muted
      )
      data-[variant="onOff"]:[&:not([data-checked])]:(
        bg-neutral
        disabled:bg-neutral-muted
      )
      data-[variant="twoWay"]:(
        bg-action
        disabled:bg-action-muted
      )
      [&[data-size=sm]]:(h-[17px] w-[29px])
      [&[data-size=base]]:(h-[21px] w-[37px])
      [&[data-size=lg]]:(h-[25px] w-[45px])
      focus:(
        shadow-[0_0_0_2px_var(--action-muted)]
      )
    `,
    { label: 'SwitchRoot' },
  ],
  thumb: [
    tw`
    pointer-events-none inline-block
    rounded-full bg-neutral-pale
    shadow-lg
    transition ease-in-out duration-200
    [&[data-size=sm]]:(h-[13px] w-[13px] translate-y-[0px])
    [&[data-size=base]]:(h-[17px] w-[17px])
    [&[data-size=lg]]:(h-[21px] w-[21px] translate-x-[0px] translate-y-[0px])
    [&:not([data-checked])]:(translate-x-0)
    [&[data-size=sm][data-checked]]:(translate-x-3)
    [&[data-size=base][data-checked]]:(translate-x-4)
    [&[data-size=lg][data-checked]]:(translate-x-5)
  `,
    { label: 'SwitchThumb' },
  ],
}

export default withStyles(
  styles,
  'Switch',
)<
  Omit<
    ComponentProps<typeof RadixSwitch.Root>,
    'onChange' | 'onCheckedChange'
  > & {
    variant?: SwitchVariant
    size?: SwitchSize
    onChange?: (checked: boolean) => void
  }
>(
  ({
    styles,
    className,
    variant = 'onOff',
    size = 'base',
    checked,
    onChange,
    ...rest
  }) => {
    const handleCheckedChange = useCallback(() => {
      onChange && onChange(!checked)
    }, [onChange, checked])

    return (
      <RadixSwitch.Root
        css={styles.root}
        className={className}
        data-variant={variant}
        data-size={size}
        data-checked={checked ? '' : undefined}
        checked={checked}
        onCheckedChange={handleCheckedChange}
        {...rest}
      >
        <RadixSwitch.Thumb
          css={styles.thumb}
          data-checked={checked ? '' : undefined}
          data-size={size}
        />
      </RadixSwitch.Root>
    )
  },
)
