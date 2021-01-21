import React, { FunctionComponent, useEffect, useState } from "react";
import Box from "src/components/box/Box";
import Inline from "src/components/inline/Inline";
import Stack from "src/components/stack/Stack";
import Image from "next/image";
import debounce from "lodash.debounce";

import Subtitle from "src/components/text/Subtitle";
import Link from "src/components/link/Link";

import styles from "../css/CocktailsPage.module.scss";
import Input from "src/components/input/Input";
import Button from "src/components/button/Button";
import { useRouter } from "next/router";

import cocktailsJSON from "data/cocktails.json";
import { getClientCookie } from "src/utils/next/ClientCookieUtils";

type Cocktail = typeof cocktailsJSON[number];

const CocktailsPage: FunctionComponent = () => {
  const router = useRouter();

  const [cocktails, setCocktails] = useState<Cocktail[] | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `/api/cocktails${search ? `?search=${search}` : ""}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${getClientCookie("token")}`,
          },
        }
      );
      const data = await res.json();
      setCocktails(data.cocktails);
    })();
  }, [search]);

  if (!cocktails) {
    return null;
  }

  const handleRandomCocktailClick = async () => {
    const res = await fetch("/api/cocktails/random", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getClientCookie("token")}`,
      },
    });
    const data = await res.json();

    router.push(`/cocktails/${data.cocktail.id}`);
  };

  return (
    <Box paddingHorizontal={32} paddingVertical={16}>
      <Stack space={24}>
        <Inline space={16} verticalAlign="center">
          <Input
            onDark
            placeholder="Search by ingredient..."
            onChange={debounce((e) => {
              setSearch(e.target.value);
            }, 200)}
            width={240}
          />
          <Button
            onClick={() => {
              handleRandomCocktailClick();
            }}
          >
            Get random cocktail!
          </Button>
        </Inline>
        <Inline space={24} horizontalAlign="space-between">
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
                width={256}
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
