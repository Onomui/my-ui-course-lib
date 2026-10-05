import './Button.css'
import type { ButtonProps } from './ButtonProps'

function Button({
  children,
  variant = 'fill',
  size = 'M',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`button button--${variant} button--${size.toLowerCase()} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button