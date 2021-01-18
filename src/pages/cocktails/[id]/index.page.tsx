import { GetServerSideProps } from "next";
import React, { FunctionComponent } from "react";
import ConnectedLayout from "src/components/connected-layout/js/ConnectedLayout";

import MetaTitle from "src/components/meta/MetaTitle";

import { requireToken } from "src/utils/next/ServerRouterUtils";
import CocktailPage from "./js/CocktailPage";

import cocktails from "../../../../data/cocktails.json";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const redirect = requireToken(context);
  if (redirect) {
    return redirect;
  }

  return { props: {} };
};

const Cocktail: FunctionComponent = () => {
  const router = useRouter();

  const cocktail = cocktails.find((c) => c.id === router.query.id);

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
