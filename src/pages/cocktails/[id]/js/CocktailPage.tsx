import Image from "next/image";
import { useRouter } from "next/router";
import React, { FunctionComponent, useState } from "react";
import Box from "src/components/box/Box";
import Button from "src/components/button/Button";
import Inline from "src/components/inline/Inline";
import Stack from "src/components/stack/Stack";
import Body from "src/components/text/Body";
import BodyHigh from "src/components/text/BodyHigh";
import Header from "src/components/text/Header";
import Subtitle from "src/components/text/Subtitle";

import cocktails from "../../../../../data/cocktails.json";
import Heart from "./components/Heart";

const getRandomCocktail = () =>
  cocktails[Math.floor(Math.random() * cocktails.length)];

type CocktailPageProps = {
  cocktail: typeof cocktails[number];
};

const CocktailPage: FunctionComponent<CocktailPageProps> = ({ cocktail }) => {
  const router = useRouter();

  const [liked, setLiked] = useState(false);

  return (
    <Box padding={32}>
      <Stack space={32}>
        <Inline space={24}>
          <div style={{ borderRadius: 24, overflow: "hidden" }}>
            <Image
              width={216}
              height={160}
              objectFit="cover"
              src={cocktail.picture}
            />
          </div>
          <Box paddingVertical={16} flexGrow={1}>
            <Stack space={16} flexGrow={1}>
              <Stack space={8} flexGrow={1}>
                <Inline space={8} verticalAlign="center">
                  <Header color="text-primary-high">{cocktail.name}</Header>
                  <Inline verticalAlign="center">
                    <div
                      role="button"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setLiked((prev) => !prev);
                      }}
                    >
                      <Heart size={32} filled={liked} />
                    </div>
                    <Subtitle color="text-secondary-high">
                      {liked ? 1 : 0}
                    </Subtitle>
                  </Inline>
                </Inline>
                <Subtitle color="text-primary-low">
                  {cocktail.category}
                </Subtitle>
                <Box flexGrow={1} />
                <Body color="text-primary-high">
                  Glass:{" "}
                  <BodyHigh color="text-primary-high">
                    {cocktail.glass}
                  </BodyHigh>
                </Body>
              </Stack>
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
            router.push(`/cocktails/${getRandomCocktail().id}`);
          }}
        >
          Get random cocktail!
        </Button>
      </Stack>
    </Box>
  );
};

export default CocktailPage;
