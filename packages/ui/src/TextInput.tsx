import { ChangeEvent, useCallback } from 'react'
import tw from 'twin.macro'
import { withStyles } from './comps'

const styles = {
  root: ({
    disabled,
    danger,
  }: {
    disabled?: boolean
    success?: boolean
    danger?: boolean
  }) => [
    tw`
      text bg-min border-neutral block
      w-full border-[1px] rounded p-2
      disabled:(cursor-not-allowed)
      focus:(
        border-[1px]
        border-action
        outline-2
        [outline-style: solid]
        outline-transparent
        outline-offset-2
        [box-shadow: 0 0 0 1px var(--action-default)]
      )
      transition-[background-color] duration-200
    `,
    danger && tw`border-danger text-danger`,
    disabled && tw`border-neutral-muted bg-neutral-pale text-muted`,
    disabled &&
      danger &&
      tw`border-danger-muted text-danger-muted bg-neutral-pale`,
    { label: 'TextInputRoot' },
  ],
}

export default withStyles(
  styles,
  'TextInput',
)<{
  disabled?: boolean
  danger?: boolean
  value?: string
  onChange?: (value: string) => any
}>(({ styles, className, disabled, danger, value, onChange }) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e.target.value)
    },
    [onChange],
  )
  return (
    <input
      type="text"
      css={styles.root({ danger, disabled })}
      className={className}
      disabled={disabled}
      value={value}
      onChange={handleChange}
    />
  )
})
