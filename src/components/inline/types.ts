import { ReactNode } from "react";

export type HorizontalAlign =
  | "left"
  | "center"
  | "right"
  | "space-between"
  | "space-around";

export type VerticalAlign = "stretch" | "top" | "center" | "bottom";

export type InlineProps = {
  children: ReactNode;
  horizontalAlign?: HorizontalAlign;
  verticalAlign?: VerticalAlign;
  noWrap?: boolean;
  space?: number;
  flexGrow?: number;
  flexShrink?: number;
  order?: number;
};
