import { GetServerSidePropsContext } from 'next';

import { parseServerCookies } from 'src/utils/ServerCookieUtils';

export const requireToken = (context: GetServerSidePropsContext) => {
  const cookies = parseServerCookies(context);

  if (!cookies.token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return null;
};
