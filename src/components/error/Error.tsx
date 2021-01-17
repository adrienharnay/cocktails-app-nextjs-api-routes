import React, { FunctionComponent, ReactNode } from 'react';

import BodyHigh from 'src/components/text/BodyHigh';

import styles from './Error.module.scss';

type ErrorProps = {
  text: ReactNode;
};

const Error: FunctionComponent<ErrorProps> = ({ text }) => {
  if (!text) {
    return null;
  }

  return (
    <BodyHigh color="text-danger" className={styles.error}>
      {text}
    </BodyHigh>
  );
};

export default Error;
