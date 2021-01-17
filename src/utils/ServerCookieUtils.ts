import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';

export const parseServerCookies = (context: GetServerSidePropsContext) =>
  parseCookies(context);
