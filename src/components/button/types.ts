import { PropsWithoutRef, ReactNode } from "react";

export type ButtonProps = PropsWithoutRef<JSX.IntrinsicElements["button"]> & {
  children: ReactNode;
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
};
