import React, { FunctionComponent } from "react";

import MetaTitle from "src/components/meta/MetaTitle";

import { useRequireNoToken } from "src/utils/next/ClientRouterUtils";
import RegisterPage from "./js/RegisterPage";

const Register: FunctionComponent = () => {
  const { redirect } = useRequireNoToken();

  if (redirect) {
    return null;
  }

  return (
    <>
      <MetaTitle title="Register" />
      <RegisterPage />
    </>
  );
};

export default Register;
