import React from 'react'
import tw from 'twin.macro'
import { withStyles } from './comps'

export type ButtonVariant = 'plain' | 'filled' | 'outlined'

export type ButtonColor = 'neutral' | 'action' | 'danger' | 'success'

const styles = {
  root: [
    tw`
      flex gap-1.5 items-center p-2
      rounded transition-colors duration-100
      focus-visible:(
        outline-none
      )
      focus:(
        shadow-[0_0_0_2px_var(--action-muted)]
      )
      disabled:(cursor-not-allowed)
      data-[variant="plain"]:(
        border-transparent
        active:(bg-neutral-pale)
        disabled:(active:(bg-transparent))
        data-[color="neutral"]:(
          text-neutral hover:(text-neutral-boosted) active:(text-neutral-max)
          disabled:(text-muted hover:(text-muted) active:(text-muted))
        )
        data-[color="action"]:(
          text-action hover:(text-action-boosted) active:(text-action-max)
          disabled:(text-action-muted hover:(text-action-muted) active:(text-action-muted))
        )
        data-[color="danger"]:(
          text-danger hover:(text-danger-boosted) active:(text-danger-max)
          disabled:(text-danger-muted hover:(text-danger-muted) active:(text-danger-muted))
        )
        data-[color="success"]:(
          text-success hover:(text-success-boosted) active:(text-success-max)
          disabled:(text-success-muted hover:(text-success-muted) active:(text-success-muted))
        )
      )
      data-[variant="filled"]:(
        text-pale border-transparent
        data-[color="neutral"]:(
          bg-neutral hover:(bg-neutral-boosted) active:(bg-neutral-max)
          disabled:(bg-neutral-muted hover:(bg-neutral-muted) active:(bg-neutral-muted))
        )
        data-[color="action"]:(
          bg-action hover:(bg-action-boosted) active:(bg-action-max)
          disabled:(bg-action-muted hover:(bg-action-muted) active:(bg-action-muted))
        )
        data-[color="danger"]:(
          bg-danger hover:(bg-danger-boosted) active:(bg-danger-max)
          disabled:(bg-danger-muted hover:(bg-danger-muted) active:(bg-danger-muted))
        )
        data-[color="success"]:(
          bg-success hover:(bg-success-boosted) active:(bg-success-max)
          disabled:(bg-success-muted hover:(bg-success-muted) active:(bg-success-muted))
        )
      )
      data-[variant="outlined"]:(
        p-[0.4375rem] border-[0.0625rem]
        active:(bg-neutral-pale)
        disabled:(active:(bg-transparent))
        data-[color="neutral"]:(
          text-neutral border-neutral hover:(border-neutral-boosted text-neutral-boosted) active:(border-neutral-max text-neutral-max)
          disabled:(border-neutral-muted text-neutral-muted hover:(border-neutral-muted text-neutral-muted) active:(border-neutral-muted text-neutral-muted))
        )
        data-[color="action"]:(
          text-action border-action hover:(border-action-boosted text-action-boosted) active:(border-action-max text-action-max)
          disabled:(border-action-muted text-action-muted hover:(border-action-muted text-action-muted) active:(border-action-muted text-action-muted))
        )
        data-[color="danger"]:(
          text-danger border-danger hover:(border-danger-boosted text-danger-boosted) active:(border-danger-max text-danger-max)
          disabled:(border-danger-muted text-danger-muted hover:(border-danger-muted text-danger-muted) active:(border-danger-muted text-danger-muted))
        )
        data-[color="success"]:(
          text-success border-success hover:(border-success-boosted text-success-boosted) active:(border-success-max text-success-max)
          disabled:(border-success-muted text-success-muted hover:(border-success-muted text-success-muted) active:(border-success-muted text-success-muted))
        )
      )
    `,
    { label: 'ButtonRoot' },
  ],
  spinner: [
    tw`
      relative w-[1.5rem] h-[1.5rem]
      data-[color="neutral"]:(
        fill-neutral
      )
      data-[color="action"]:(
        fill-action
      )
      data-[color="danger"]:(
        fill-danger
      )
      data-[color="success"]:(
        fill-success
      )
      data-[variant="filled"]:(
        fill-neutral-pale
      )
    `,
    { label: 'ButtonSpinner' },
  ],
}

const Spinner = ({
  color,
  variant,
}: {
  color: ButtonColor
  variant: ButtonVariant
}) => (
  <div css={styles.spinner} data-color={color} data-variant={variant}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      tw="absolute top-0 left-0 w-full h-full"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      />
    </svg>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      tw="absolute top-0 left-0 w-full h-full animate-spin"
    >
      <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" />
    </svg>
  </div>
)

export default withStyles(
  styles,
  'Button',
)<{
  disabled?: boolean
  onClick?: () => void
  variant?: ButtonVariant
  color?: ButtonColor
  busy?: boolean
  icon?: React.ReactNode
  text?: string
  iconOnRight?: boolean
}>(
  ({
    styles,
    className,
    disabled,
    onClick,
    text,
    icon,
    iconOnRight,
    variant = 'plain',
    busy,
    color = 'neutral',
  }) => (
    <button
      css={styles.root}
      className={className}
      onClick={onClick}
      disabled={disabled}
      data-variant={variant}
      data-color={color}
    >
      {icon && !iconOnRight && !busy && icon}
      {!iconOnRight && busy && <Spinner color={color} variant={variant} />}
      {text}
      {icon && iconOnRight && !busy && icon}
      {iconOnRight && busy && <Spinner color={color} variant={variant} />}
    </button>
  ),
)
