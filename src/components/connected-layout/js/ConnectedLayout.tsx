import { useRouter } from "next/router";
import React, { FunctionComponent, ReactNode } from "react";

import Box from "src/components/box/Box";
import Inline from "src/components/inline/Inline";
import Stack from "src/components/stack/Stack";
import BodyHigh from "src/components/text/BodyHigh";

import { removeClientCookie } from "src/utils/next/ClientCookieUtils";

type ConnectedLayoutProps = {
  children: ReactNode;
};

const ConnectedLayout: FunctionComponent<ConnectedLayoutProps> = ({
  children,
}) => {
  const router = useRouter();

  return (
    <Stack flexGrow={1}>
      <Box
        padding={24}
        backgroundColor="background-primary"
        boxShadow="shadow-around"
      >
        <Inline horizontalAlign="right" verticalAlign="center">
          <div
            onClick={() => {
              removeClientCookie("token");
              router.replace("/login");
            }}
            role="button"
            style={{ cursor: "pointer" }}
          >
            <BodyHigh color="text-white">Logout</BodyHigh>
          </div>
        </Inline>
      </Box>
      <Box flexGrow={1}>{children}</Box>
    </Stack>
  );
};

export default ConnectedLayout;
