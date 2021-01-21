import { GetServerSideProps } from "next";
import React, { FunctionComponent, useEffect, useState } from "react";
import ConnectedLayout from "src/components/connected-layout/js/ConnectedLayout";

import MetaTitle from "src/components/meta/MetaTitle";

import { requireToken } from "src/utils/next/ServerRouterUtils";
import CocktailPage from "./js/CocktailPage";

import { useRouter } from "next/router";
import { getClientCookie } from "src/utils/next/ClientCookieUtils";

import cocktailsJSON from "data/cocktails.json";

type Cocktail = typeof cocktailsJSON[number] & {
  likes?: string[];
  liked: boolean;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const redirect = requireToken(context);
  if (redirect) {
    return redirect;
  }

  return { props: {} };
};

const Cocktail: FunctionComponent = () => {
  const router = useRouter();

  const [cocktail, setCocktail] = useState<Cocktail | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/cocktails/${router.query.id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getClientCookie("token")}`,
        },
      });
      const data = await res.json();
      setCocktail(data.cocktail);
    })();
  }, [router.query.id]);

  if (!cocktail) {
    return null;
  }

  return (
    <>
      <MetaTitle title={cocktail.name} />
      <ConnectedLayout>
        <CocktailPage cocktail={cocktail} />
      </ConnectedLayout>
    </>
  );
};

export default Cocktail;
