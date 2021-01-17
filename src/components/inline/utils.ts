import { HorizontalAlign, VerticalAlign } from "./types";

const verticalAlignToAlignItems = {
  stretch: "stretch",
  top: "flex-start",
  center: "center",
  bottom: "flex-end",
  none: "none",
} as const;

const horizontalAlignToAlignItems = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  "space-between": "space-between",
  "space-around": "space-around",
  none: "none",
} as const;

const wrapToFlexWrap = {
  false: "nowrap",
  true: "wrap",
} as const;

export const getAlignItemsFromVerticalAlign = (verticalAlign: VerticalAlign) =>
  verticalAlignToAlignItems[verticalAlign];

export const getJustifyContentFromHorizontalAlign = (
  horizontalAlign: HorizontalAlign
) => horizontalAlignToAlignItems[horizontalAlign];

export const getFlexWrapFromNoWrap = (noWrap: boolean) =>
  wrapToFlexWrap[noWrap ? "false" : "true"];
