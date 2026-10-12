import type { ReactElement } from 'react'
import './Button.css'
import type {
  ButtonAsButtonProps,
  ButtonAsLinkProps,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from './ButtonProps'

function getButtonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className: string,
) {
  return [
    'button',
    `button--${variant}`,
    `button--${size.toLowerCase()}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')
}

function Button(props: ButtonAsButtonProps): ReactElement
function Button(props: ButtonAsLinkProps): ReactElement
function Button(props: ButtonProps): ReactElement {
  if (props.as === 'a') {
    const {
      as,
      children,
      variant = 'fill',
      size = 'M',
      className = '',
      disabled = false,
      href,
      tabIndex,
      onClick,
      ref,
      ...rest
    } = props

    void as

    return (
      <a
        {...rest}
        ref={ref}
        href={disabled ? undefined : href}
        tabIndex={disabled ? -1 : tabIndex}
        aria-disabled={disabled || undefined}
        className={getButtonClasses(variant, size, className)}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault()
            event.stopPropagation()
            return
          }

          onClick?.(event)
        }}
      >
        {children}
      </a>
    )
  }

  const {
    as,
    children,
    variant = 'fill',
    size = 'M',
    className = '',
    type = 'button',
    ref,
    ...rest
  } = props

  void as

  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      className={getButtonClasses(variant, size, className)}
    >
      {children}
    </button>
  )
}

export default Button