import React, { FunctionComponent, Children } from "react";

import { StackProps } from "./types";
import {
  getAlignItemsFromHorizontalAlign,
  getJustifyContentFromVerticalAlign,
} from "./utils";

const Stack: FunctionComponent<StackProps> = ({
  children,
  space,
  flexGrow,
  flexShrink,
  horizontalAlign,
  verticalAlign,
}) => {
  const childrenMap = Children.map(
    children as React.ReactElement[],
    (child) => {
      if (!child) {
        return null;
      }

      const isFlex =
        child.props?.flexGrow !== undefined ||
        child.props?.flexShrink !== undefined;

      return (
        <div
          style={{
            display: isFlex ? "flex" : undefined,
            flexDirection: isFlex ? "column" : undefined,
            flexGrow: child.props?.flexGrow,
            flexShrink: child.props?.flexShrink,
            order: child.props?.order,
            marginTop: space,
            alignSelf:
              child.type === Stack && child.props.horizontalAlign
                ? getAlignItemsFromHorizontalAlign(child.props.horizontalAlign)
                : undefined,
          }}
        >
          {child}
        </div>
      );
    }
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: verticalAlign
          ? getJustifyContentFromVerticalAlign(verticalAlign)
          : undefined,
        alignItems: horizontalAlign
          ? getAlignItemsFromHorizontalAlign(horizontalAlign)
          : undefined,
        flexGrow,
        flexShrink,
        marginTop: space ? space * -1 : undefined,
      }}
    >
      {childrenMap}
    </div>
  );
};

export default Stack;
