import { PropsWithoutRef, ReactNode } from "react";

export type InputProps = PropsWithoutRef<JSX.IntrinsicElements["input"]> & {
  width?: number;
  className?: string;
  label?: ReactNode;
  error?: ReactNode;
};
