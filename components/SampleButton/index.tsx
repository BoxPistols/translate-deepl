import React from 'react';
import styles from './index.module.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const SampleButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? styles['storybook-button--primary'] : styles['storybook-button--secondary'];
  return (
    <button
      type="button"
      className={ [ styles['storybook-button'], styles[`storybook-button--${size}`], mode ].join(' ')}
      // style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
