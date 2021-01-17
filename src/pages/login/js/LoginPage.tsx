import React, { FunctionComponent } from "react";

import PublicBox from "src/components/public-box/PublicBox";

import LoginForm from "./LoginForm";

const LoginPage: FunctionComponent = () => {
  return (
    <PublicBox>
      <LoginForm />
    </PublicBox>
  );
};

export default LoginPage;
