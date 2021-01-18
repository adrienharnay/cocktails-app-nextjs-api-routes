import React, { FunctionComponent } from "react";
import Box from "src/components/box/Box";
import Inline from "src/components/inline/Inline";
import Stack from "src/components/stack/Stack";
import Image from "next/image";

import cocktails from "../../../../data/cocktails.json";
import Subtitle from "src/components/text/Subtitle";
import Link from "src/components/link/Link";

import styles from "../css/CocktailsPage.module.scss";

const CocktailsPage: FunctionComponent = () => {
  return (
    <Box padding={16}>
      <Inline space={24} horizontalAlign="space-around">
        {cocktails.map((cocktail) => (
          <Link
            key={cocktail.id}
            url={`/cocktails/${cocktail.id}`}
            styled={false}
            className={styles.link}
          >
            <Box
              padding={16}
              borderRadius={16}
              boxShadow="shadow-around"
              backgroundColor="background-white"
              width={288}
              flexGrow={0}
            >
              <Stack space={16} flexGrow={1} verticalAlign="space-between">
                <div
                  style={{
                    position: "relative",
                    height: 220,
                    marginTop: -16,
                    marginLeft: -16,
                    marginRight: -16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={cocktail.picture}
                  />
                </div>
                <Subtitle color="text-primary-high">{cocktail.name}</Subtitle>
              </Stack>
            </Box>
          </Link>
        ))}
      </Inline>
    </Box>
  );
};

export default CocktailsPage;
