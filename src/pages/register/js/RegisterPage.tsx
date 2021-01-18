import React, { FunctionComponent } from "react";

import PublicBox from "src/components/public-box/PublicBox";

import RegisterForm from "./RegisterForm";

const RegisterPage: FunctionComponent = () => {
  return (
    <PublicBox>
      <RegisterForm />
    </PublicBox>
  );
};

export default RegisterPage;
