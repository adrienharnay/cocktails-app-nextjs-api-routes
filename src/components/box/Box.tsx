import React, { FunctionComponent } from "react";

type BoxProps = {
  width?: number;
  margin?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  boxShadow?: string;
  flex?: number;
  flexGrow?: number;
  flexShrink?: number;
  order?: number;
};

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
