import { ReactNode } from "react";
import { TextColor } from "src/utils/ui/ColorUtils";

export type TextAlign = "left" | "center" | "right" | "justify";

export type TextProps = {
  children: ReactNode;
  color: TextColor;
  textAlign?: TextAlign;
  ellipsis?: boolean;
  hyphenate?: boolean;
  className?: string;
};
