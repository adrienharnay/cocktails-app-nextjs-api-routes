import React, { forwardRef } from "react";

import Subtitle from "src/components/text/Subtitle";

import { ButtonProps } from "./types";

import styles from "./Button.module.scss";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant, block, loading, disabled, className, ...otherProps },
    ref
  ) => {
    const ReplacementContent = loading && "...";

    const Text = ReplacementContent ? (
      <span className={styles.hiddenContent}>{children}</span>
    ) : (
      children
    );

    const classes = [
      styles.button,
      styles[variant],
      block && styles.block,
      disabled && styles.disabled,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type="button"
        {...otherProps}
        disabled={loading || disabled}
        className={classes}
      >
        <Subtitle color="text-primary-high" ellipsis>
          {ReplacementContent}
          {Text}
        </Subtitle>
      </button>
    );
  }
);

export default Button;
