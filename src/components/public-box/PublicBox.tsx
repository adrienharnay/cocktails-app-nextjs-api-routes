import React, { FunctionComponent, ReactNode } from "react";

import Box from "../box/Box";
import Inline from "../inline/Inline";

type PublicBoxProps = {
  children: ReactNode;
};

const PublicBox: FunctionComponent<PublicBoxProps> = ({ children }) => {
  return (
    <Inline verticalAlign="top" horizontalAlign="center">
      <Box
        backgroundColor="background-white"
        boxShadow="shadow-around"
        marginVertical={32}
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
