import React, { FunctionComponent } from "react";

import { TextProps } from "./types";

import styles from "./Details.module.scss";
import textStyles from "./Text.module.scss";
import { getColorValueFromColorName } from "src/utils/ui/ColorUtils";

const Details: FunctionComponent<TextProps> = ({
  children,
  color,
  textAlign,
  ellipsis,
  hyphenate,
  className,
}) => (
  <div
    className={[
      styles.text,
      textStyles.text,
      ellipsis && textStyles.ellipsis,
      hyphenate && textStyles.hyphenate,
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    style={{
      color: getColorValueFromColorName(color),
      textAlign,
    }}
  >
    {children}
  </div>
);

export default Details;
