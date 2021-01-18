import React, { forwardRef } from "react";

import Error from "src/components/error/Error";
import Label from "src/components/label/Label";

import { InputProps } from "./types";

import styles from "./Input.module.scss";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ width, className, label, error, onDark, ...otherProps }, ref) => {
    return (
      <>
        <Label text={label} />
        <input
          ref={ref}
          className={[styles.container, onDark && styles.onDark, className]
            .filter(Boolean)
            .join(" ")}
          style={{ width }}
          {...otherProps}
        />
        <Error text={error} />
      </>
    );
  }
);

export default Input;
