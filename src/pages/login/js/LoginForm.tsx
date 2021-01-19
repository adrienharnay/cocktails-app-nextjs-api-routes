import React, { FormEvent, FunctionComponent, useState } from "react";

import Button from "src/components/button/Button";
import Input from "src/components/input/Input";
import Stack from "src/components/stack/Stack";
import Header from "src/components/text/Header";

import { setClientCookie } from "src/utils/next/ClientCookieUtils";
import { useRouter } from "next/router";
import Link from "src/components/link/Link";
import Details from "src/components/text/Details";

const timeout = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const LoginForm: FunctionComponent = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formState, setFormState] = useState<"initial" | "loading" | "error">(
    "initial"
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (data.token) {
      setFormState("initial");
      setClientCookie("token", data.token);
      router.replace("/");
    } else {
      setFormState(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack space={32}>
        <Header color="text-primary-high">Log in</Header>
        <Stack space={24}>
          <Input
            type="email"
            label="Email"
            error={
              !["initial", "loading"].includes(formState) &&
              formState.includes("email")
                ? formState
                : undefined
            }
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            label="Password"
            error={
              !["initial", "loading"].includes(formState) &&
              formState.includes("password")
                ? formState
                : undefined
            }
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Stack>
        <Stack space={16} horizontalAlign="center">
          <Button
            type="submit"
            disabled={!email || !password}
            loading={formState === "loading"}
          >
            Log in
          </Button>
          <Link url="/register">
            <Details color="text-primary-high" textAlign="center">
              Don't have an account yet?
              <br />
              Register instead
            </Details>
          </Link>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginForm;
