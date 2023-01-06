import * as RadixSlider from '@radix-ui/react-slider'
import { ComponentProps, useCallback } from 'react'
import tw from 'twin.macro'
import { withStyles } from './comps'

const styles = {
  root: [
    tw`relative flex items-center select-none touch-none w-full data-[orientation=horizontal]:h-6`,
    { label: 'SliderRoot' },
  ],
  track: ({ disabled }: { disabled?: boolean }) => [
    tw`bg-neutral-muted relative grow-[1] rounded-[9999px] data-[orientation=horizontal]:h-[3px]`,
    disabled && tw`bg-neutral-pale`,
    { label: 'SliderTrack' },
  ],
  range: ({ disabled }: { disabled?: boolean }) => [
    tw`absolute bg-neutral-boosted rounded-[9999px] h-full`,
    disabled && tw`bg-neutral-muted`,
    { label: 'SliderRange' },
  ],
  thumb: ({ disabled }: { disabled?: boolean }) => [
    tw`

      block w-6 h-6 rounded-full
      bg-action
      shadow-[0_2px_8px_var(--neutral-muted)]
      hover:(
        bg-action-boosted
      )
      focus:(
        outline-none
        shadow-[0_0_0_3px_var(--neutral-muted)]
      )
      active:(
        shadow-[0_0_0_3px_var(--action-muted)]
      )
    `,
    disabled &&
      tw`
        cursor-not-allowed
        bg-neutral-muted
        shadow-none
        hover:(bg-neutral-muted)
        active:(
          shadow-none
        )
    `,
    { label: 'SliderThumb' },
  ],
}

export default withStyles(
  styles,
  'Slider',
)<
  Omit<ComponentProps<typeof RadixSlider.Root>, 'value' | 'onValueChange'> & {
    value: number
    onValueChange: (value: number) => any
  }
>(({ styles, className, disabled, value, onValueChange, ...rest }) => {
  const handleValueChange = useCallback(
    (values: number[]) => {
      onValueChange && onValueChange(values[0])
    },
    [onValueChange],
  )
  return (
    <RadixSlider.Root
      css={styles.root}
      className={className}
      disabled={disabled}
      value={[value]}
      onValueChange={handleValueChange}
      {...rest}
    >
      <RadixSlider.Track css={styles.track({ disabled })}>
        <RadixSlider.Range css={styles.range({ disabled })} />
      </RadixSlider.Track>
      <RadixSlider.Thumb css={styles.thumb({ disabled })} />
    </RadixSlider.Root>
  )
})
