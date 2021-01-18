import NextLink from "next/link";
import React, { FunctionComponent } from "react";

import textStyles from "src/components/text/Text.module.scss";

import { LinkProps } from "./types";

import styles from "./Link.module.scss";

const TARGET_BLANK_PASSED_PROPS = {
  target: "_blank",
  rel: "noreferrer noopener",
};

const Link: FunctionComponent<LinkProps> = ({
  children,
  url,
  disabled,
  styled = true,
  className,
}) => {
  const classNames = [
    styles.link,
    textStyles.textChild,
    disabled && styles.disabled,
    styled && styles.styled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (disabled) {
    return <span className={classNames}>{children}</span>;
  }

  if (url.startsWith("/")) {
    return (
      <NextLink href={url}>
        {
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a className={classNames}>{children}</a>
        }
      </NextLink>
    );
  }

  const targetBlank = !url.startsWith("mailto") && !url.startsWith("tel");

  return (
    <a
      href={url}
      className={classNames}
      {...(targetBlank ? TARGET_BLANK_PASSED_PROPS : null)}
    >
      {children}
    </a>
  );
};

export default Link;
