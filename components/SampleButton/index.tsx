import React from 'react'
import styles from './index.module.css'

interface ButtonProps {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

export const SampleButton: React.FC = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? styles['storybook-button--primary']
    : styles['storybook-button--secondary']
  return (
    <button
      type="button"
      className={[
        styles['storybook-button'],
        styles[`storybook-button--${size}`],
        mode,
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}
