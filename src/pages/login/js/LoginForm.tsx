import React, { FunctionComponent, useState } from "react";

import Button from "src/components/button/Button";
import Input from "src/components/input/Input";
import Stack from "src/components/stack/Stack";
import Header from "src/components/text/Header";

import { setClientCookie } from "src/utils/next/ClientCookieUtils";
import { useRouter } from "next/router";

const timeout = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const LoginForm: FunctionComponent = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    console.log(email, password);
    setLoading(true);

    await timeout(400);

    setLoading(false);
    setClientCookie("token", "VALID_TOKEN");
    router.replace("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack space={32}>
        <Header color="text-primary-high">Log in</Header>
        <Stack space={24}>
          <Input
            type="email"
            label="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            label="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Stack>
        <Stack horizontalAlign="center">
          <Button
            type="submit"
            disabled={!email || !password}
            loading={loading}
          >
            Log in
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginForm;
