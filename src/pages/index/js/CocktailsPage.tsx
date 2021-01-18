import React, { FunctionComponent, useMemo, useState } from "react";
import Box from "src/components/box/Box";
import Inline from "src/components/inline/Inline";
import Stack from "src/components/stack/Stack";
import Image from "next/image";
import debounce from "lodash.debounce";

import cocktails from "../../../../data/cocktails.json";
import Subtitle from "src/components/text/Subtitle";
import Link from "src/components/link/Link";

import styles from "../css/CocktailsPage.module.scss";
import Input from "src/components/input/Input";

const CocktailsPage: FunctionComponent = () => {
  const [search, setSearch] = useState("");

  const filteredCocktails = useMemo(
    () =>
      !search
        ? cocktails
        : cocktails.filter((cocktail) =>
            cocktail.ingredients.some((ingredient) =>
              ingredient.name.toLowerCase().includes(search.toLowerCase())
            )
          ),
    [search, cocktails]
  );

  return (
    <Box paddingHorizontal={32} paddingVertical={16}>
      <Stack space={24}>
        <Input
          onDark
          placeholder="Search by ingredient..."
          onChange={debounce((e) => {
            setSearch(e.target.value);
          }, 200)}
          width={240}
        />
        <Inline space={24} horizontalAlign="space-between">
          {filteredCocktails.map((cocktail) => (
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
      </Stack>
    </Box>
  );
};

export default CocktailsPage;
