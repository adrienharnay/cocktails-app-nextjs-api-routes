import { PropsWithoutRef, ReactNode } from 'react';

export type variant =
  | 'primary'
  | 'primary-reversed'
  | 'secondary-high'
  | 'secondary-low';

export type ButtonProps = PropsWithoutRef<JSX.IntrinsicElements['button']> & {
  children: ReactNode;
  variant: variant;
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
};
