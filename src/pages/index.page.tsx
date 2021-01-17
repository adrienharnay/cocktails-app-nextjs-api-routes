import { GetServerSideProps } from 'next';
import React, { FunctionComponent } from 'react';

import MetaTitle from 'src/components/meta/MetaTitle';

import { requireToken } from 'src/utils/ServerRouterUtils';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const redirect = requireToken(context);
  if (redirect) {
    return redirect;
  }

  return { props: {} };
};

const IndexPage: FunctionComponent = () => {
  return (
    <>
      <MetaTitle title="Index" />
      <div />
    </>
  );
};

export default IndexPage;
