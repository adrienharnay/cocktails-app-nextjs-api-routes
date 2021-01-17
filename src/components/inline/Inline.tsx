import React, { FunctionComponent, Children } from "react";

import { InlineProps } from "./types";
import {
  getAlignItemsFromVerticalAlign,
  getFlexWrapFromNoWrap,
  getJustifyContentFromHorizontalAlign,
} from "./utils";

const Inline: FunctionComponent<InlineProps> = ({
  children,
  horizontalAlign,
  verticalAlign,
  noWrap = false,
  space,
  flex,
  flexGrow,
  flexShrink,
}) => {
  const childrenMap = Children.map(
    children as React.ReactElement[],
    (child) => {
      if (!child) {
        return null;
      }

      const isFlex =
        child.props?.flex !== undefined ||
        child.props?.flexGrow !== undefined ||
        child.props?.flexShrink !== undefined;

      return (
        <div
          style={{
            display: isFlex ? "flex" : undefined,
            flex: child.props?.flex,
            flexGrow: child.props?.flexGrow,
            flexShrink: child.props?.flexShrink,
            order: child.props?.order,
            marginTop: space,
            marginLeft: space,
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
        flexWrap: getFlexWrapFromNoWrap(noWrap),
        justifyContent: horizontalAlign
          ? getJustifyContentFromHorizontalAlign(horizontalAlign)
          : undefined,
        alignItems: verticalAlign
          ? getAlignItemsFromVerticalAlign(verticalAlign)
          : undefined,
        flex,
        flexGrow,
        flexShrink,
        marginTop: space ? space * -1 : undefined,
        marginLeft: space ? space * -1 : undefined,
      }}
    >
      {childrenMap}
    </div>
  );
};

export default Inline;
