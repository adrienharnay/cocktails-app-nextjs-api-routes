import React, { FunctionComponent } from "react";
import { getColorValueFromColorName } from "src/utils/ui/ColorUtils";
import { BoxProps } from "./types";

const Box: FunctionComponent<BoxProps> = ({
  children,
  backgroundColor,
  borderColor,
  flex,
  flexGrow,
  flexShrink,
  ...otherProps
}) => {
  return (
    <div
      style={{
        display:
          flex !== undefined ||
          flexGrow !== undefined ||
          flexShrink !== undefined
            ? "flex"
            : undefined,
        flex,
        flexGrow,
        flexShrink,
        backgroundColor:
          backgroundColor && getColorValueFromColorName(backgroundColor),
        border: borderColor && `1px solid ${borderColor}`,
        ...otherProps,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
