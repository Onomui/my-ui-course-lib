import type { ComponentPropsWithRef, ReactNode } from 'react'

export type ButtonVariant = 'fill' | 'outline' | 'text'

export type ButtonSize = 'S' | 'M' | 'L'

interface ButtonBaseProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
}

export type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ComponentPropsWithRef<'button'>, 'children' | 'size'> & {
    as?: 'button'
  }

export type ButtonAsLinkProps = ButtonBaseProps &
  Omit<ComponentPropsWithRef<'a'>, 'children' | 'size'> & {
    as: 'a'
    href: string
    disabled?: boolean
  }

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps