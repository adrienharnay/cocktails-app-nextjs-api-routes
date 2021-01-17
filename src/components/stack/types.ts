import { ReactNode } from "react";

export type HorizontalAlign = "stretch" | "left" | "center" | "right";

export type VerticalAlign =
  | "top"
  | "center"
  | "bottom"
  | "space-between"
  | "space-around";

export type StackProps = {
  children: ReactNode;
  space?: number;
  horizontalAlign?: HorizontalAlign;
  verticalAlign?: VerticalAlign;
  flex?: number;
  flexGrow?: number;
  flexShrink?: number;
  order?: number;
};
