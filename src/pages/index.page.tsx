import { GetServerSideProps } from "next";
import React, { FunctionComponent } from "react";
import ConnectedLayout from "src/components/connected-layout/js/ConnectedLayout";

import MetaTitle from "src/components/meta/MetaTitle";

import { requireToken } from "src/utils/next/ServerRouterUtils";
import CocktailsPage from "./index/js/CocktailsPage";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const redirect = requireToken(context);
  if (redirect) {
    return redirect;
  }

  return { props: {} };
};

const Index: FunctionComponent = () => {
  return (
    <>
      <MetaTitle title="Cocktails" />
      <ConnectedLayout>
        <CocktailsPage />
      </ConnectedLayout>
    </>
  );
};

export default Index;
