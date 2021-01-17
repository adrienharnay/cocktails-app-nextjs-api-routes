import React, { FunctionComponent } from 'react';

import MetaTitle from 'src/components/meta/MetaTitle';

import { useRequireNoToken } from 'src/utils/ClientRouterUtils';

const RegisterPage: FunctionComponent = () => {
  const { redirect } = useRequireNoToken();

  if (redirect) {
    return null;
  }

  return (
    <>
      <MetaTitle title="Register" />
      <div />
    </>
  );
};

export default RegisterPage;
