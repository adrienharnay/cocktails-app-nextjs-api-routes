import React, { FunctionComponent } from "react";
import { getColorValueFromColorName } from "src/utils/ui/ColorUtils";
import { BoxProps } from "./types";

const Box: FunctionComponent<BoxProps> = ({
  children,
  margin,
  marginHorizontal,
  marginVertical,
  padding,
  paddingHorizontal,
  paddingVertical,
  backgroundColor,
  borderColor,
  boxShadow,
  flexGrow,
  flexShrink,
  ...otherProps
}) => {
  return (
    <div
      style={{
        display:
          flexGrow !== undefined || flexShrink !== undefined
            ? "flex"
            : undefined,
        marginTop: marginVertical || margin,
        marginBottom: marginVertical || margin,
        marginLeft: marginHorizontal || margin,
        marginRight: marginHorizontal || margin,
        paddingTop: paddingVertical || padding,
        paddingBottom: paddingVertical || padding,
        paddingLeft: paddingHorizontal || padding,
        paddingRight: paddingHorizontal || padding,
        flexGrow,
        flexShrink,
        backgroundColor:
          backgroundColor && getColorValueFromColorName(backgroundColor),
        border: borderColor && `1px solid ${borderColor}`,
        boxShadow: boxShadow && getColorValueFromColorName(boxShadow),
        ...otherProps,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
