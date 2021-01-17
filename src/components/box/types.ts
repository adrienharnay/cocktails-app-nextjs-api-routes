import { BackgroundColor } from "src/utils/ui/ColorUtils";

export type BoxProps = {
  width?: number;
  margin?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  backgroundColor?: BackgroundColor;
  borderColor?: string;
  borderRadius?: number;
  boxShadow?: string;
  flexGrow?: number;
  flexShrink?: number;
  order?: number;
};
