import React, { FormEvent, FunctionComponent, useState } from "react";

import Button from "src/components/button/Button";
import Input from "src/components/input/Input";
import Stack from "src/components/stack/Stack";
import Header from "src/components/text/Header";

import { setClientCookie } from "src/utils/next/ClientCookieUtils";
import { useRouter } from "next/router";
import Link from "src/components/link/Link";
import Details from "src/components/text/Details";

const RegisterForm: FunctionComponent = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formState, setFormState] = useState<"initial" | "loading" | string>(
    "initial"
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    const res = await fetch("/api/register", {
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
        <Header color="text-primary-high">Register</Header>
        <Stack space={24}>
          <Input
            type="email"
            label="Email"
            error={
              !["initial", "loading"].includes(formState)
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
            Register
          </Button>
          <Link url="/login">
            <Details color="text-primary-high" textAlign="center">
              Already have an account?
              <br />
              Log in instead
            </Details>
          </Link>
        </Stack>
      </Stack>
    </form>
  );
};

export default RegisterForm;
