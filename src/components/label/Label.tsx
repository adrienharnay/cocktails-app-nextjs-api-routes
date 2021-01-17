import React, { FunctionComponent, ReactNode } from "react";

import Body from "src/components/text/Body";

import styles from "./Label.module.scss";

type LabelProps = {
  text: ReactNode;
};

const Label: FunctionComponent<LabelProps> = ({ text }) => {
  if (!text) {
    return null;
  }

  return (
    <Body color="text-primary-high" className={styles.label}>
      {text}
    </Body>
  );
};

export default Label;
