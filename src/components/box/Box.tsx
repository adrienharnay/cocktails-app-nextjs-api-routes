import React, { FunctionComponent } from "react";
import { BoxProps } from "./types";

const Box: FunctionComponent<BoxProps> = ({
  children,
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
        border: borderColor && `1px solid ${borderColor}`,
        ...otherProps,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
