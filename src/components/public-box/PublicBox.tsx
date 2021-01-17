import React, { FunctionComponent, ReactNode } from "react";

import Box from "../box/Box";
import Inline from "../inline/Inline";

type PublicBoxProps = {
  children: ReactNode;
};

const PublicBox: FunctionComponent<PublicBoxProps> = ({ children }) => {
  return (
    <Inline verticalAlign="top" horizontalAlign="center" flex={1}>
      <Box
        backgroundColor="background-white"
        boxShadow="0px 10px 50px rgba(2, 6, 35, 0.05)"
        margin={32}
        padding={24}
        borderRadius={24}
        width={320}
      >
        {children}
      </Box>
    </Inline>
  );
};

export default PublicBox;
