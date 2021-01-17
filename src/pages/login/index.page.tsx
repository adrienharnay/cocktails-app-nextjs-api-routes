import React, { FunctionComponent } from 'react';

import MetaTitle from 'src/components/meta/MetaTitle';

import { useRequireNoToken } from 'src/utils/ClientRouterUtils';

const LoginPage: FunctionComponent = () => {
  const { redirect } = useRequireNoToken();

  if (redirect) {
    return null;
  }

  return (
    <>
      <MetaTitle title="Login" />
      <div />
    </>
  );
};

export default LoginPage;
