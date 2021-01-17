import { HorizontalAlign, VerticalAlign } from "./types";

const horizontalAlignToAlignItemMap = {
  stretch: "stretch",
  left: "flex-start",
  right: "flex-end",
  center: "center",
} as const;

export const getAlignItemsFromHorizontalAlign = (
  horizontalAlign: HorizontalAlign
) => horizontalAlignToAlignItemMap[horizontalAlign];

const verticalAlignToAlignItemMap = {
  top: "flex-start",
  bottom: "flex-end",
  center: "center",
  "space-between": "space-between",
  "space-around": "space-around",
} as const;

export const getJustifyContentFromVerticalAlign = (
  verticalAlign: VerticalAlign
) => verticalAlignToAlignItemMap[verticalAlign];
