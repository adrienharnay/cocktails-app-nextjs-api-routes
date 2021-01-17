import React, { FunctionComponent } from "react";

import MetaTitle from "src/components/meta/MetaTitle";
import LoginPage from "./js/LoginPage";

import { useRequireNoToken } from "src/utils/next/ClientRouterUtils";

const Login: FunctionComponent = () => {
  const { redirect } = useRequireNoToken();

  if (redirect) {
    return null;
  }

  return (
    <>
      <MetaTitle title="Login" />
      <LoginPage />
    </>
  );
};

export default Login;
