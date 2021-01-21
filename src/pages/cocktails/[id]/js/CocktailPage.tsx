import Image from "next/image";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";
import Box from "src/components/box/Box";
import Button from "src/components/button/Button";
import Inline from "src/components/inline/Inline";
import Stack from "src/components/stack/Stack";
import Body from "src/components/text/Body";
import BodyHigh from "src/components/text/BodyHigh";
import Header from "src/components/text/Header";
import Subtitle from "src/components/text/Subtitle";
import Heart from "./components/Heart";

import cocktailsJSON from "data/cocktails.json";
import { getClientCookie } from "src/utils/next/ClientCookieUtils";

type Cocktail = typeof cocktailsJSON[number] & {
  likes?: string[];
  liked: boolean;
};

type CocktailPageProps = {
  cocktail: Cocktail;
};

const CocktailPage: FunctionComponent<CocktailPageProps> = ({
  cocktail: initialCocktail,
}) => {
  const router = useRouter();

  const [cocktail, setCocktail] = useState(initialCocktail);

  useEffect(() => {
    setCocktail(initialCocktail);
  }, [initialCocktail]);

  const toggleCocktailLike = async () => {
    const res = await fetch(`/api/cocktails/${cocktail.id}/toggle-like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${getClientCookie("token")}`,
      },
    });
    const data = await res.json();

    setCocktail(data.cocktail);
  };

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
    <Box padding={32}>
      <Stack space={32}>
        <Inline space={24}>
          <div style={{ borderRadius: 24, overflow: "hidden" }}>
            <Image
              width={256}
              height={220}
              objectFit="cover"
              src={cocktail.picture}
            />
          </div>
          <Box paddingVertical={16}>
            <Stack space={16}>
              <Stack space={8}>
                <Inline space={8} verticalAlign="center">
                  <Header color="text-primary-high">{cocktail.name}</Header>
                  <Inline verticalAlign="center">
                    <div
                      role="button"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        toggleCocktailLike();
                      }}
                    >
                      <Heart size={32} filled={cocktail.liked} />
                    </div>
                    <Subtitle color="text-secondary-high">
                      {cocktail.likes?.length || 0}
                    </Subtitle>
                  </Inline>
                </Inline>
                <Subtitle color="text-primary-low">
                  {cocktail.category}
                </Subtitle>
              </Stack>
              <Body color="text-primary-high">
                Glass:{" "}
                <BodyHigh color="text-primary-high">{cocktail.glass}</BodyHigh>
              </Body>
            </Stack>
          </Box>
        </Inline>
        <Stack space={8}>
          {cocktail.ingredients.map((ingredient) => (
            <Body key={ingredient.name} color="text-primary-high">
              <BodyHigh color="text-primary-high">
                {ingredient.quantity}
              </BodyHigh>{" "}
              {ingredient.name}
            </Body>
          ))}
        </Stack>
        <Body color="text-primary-high">{cocktail.instructions}</Body>
        <Button
          onClick={() => {
            handleRandomCocktailClick();
          }}
        >
          Get random cocktail!
        </Button>
      </Stack>
    </Box>
  );
};

export default CocktailPage;
