import Head from 'next/head';
import React, { FunctionComponent } from 'react';

type MetaTitleProps = {
  title: string;
};

const MetaTitle: FunctionComponent<MetaTitleProps> = ({ title }) => {
  const fullTitle = `${title} • Cocktails app`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta property="og:title" content={fullTitle} key="og:title" />
      <meta name="twitter:title" content={fullTitle} key="twitter:title" />
    </Head>
  );
};

export default MetaTitle;
