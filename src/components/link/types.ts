import { ReactNode } from "react";

export type LinkProps = {
  children: ReactNode;
  url: string;
  disabled?: boolean;
  styled?: boolean;
};
