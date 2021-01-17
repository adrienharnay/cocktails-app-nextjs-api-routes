import { parseCookies, setCookie, destroyCookie } from 'nookies';

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

type CookieName = 'token';

const getCookieExpireTime = (lifetimeInSeconds: number) => {
  const expires = new Date();

  expires.setTime(expires.getTime() + lifetimeInSeconds * 1000);

  return expires;
};

export const getClientCookie = (name: CookieName) => {
  return parseCookies()[name];
};

export const setClientCookie = (
  name: CookieName,
  value: string,
  lifetimeInSeconds = ONE_YEAR_IN_SECONDS,
) => {
  setCookie(null, name, value, {
    path: '/',
    expires: getCookieExpireTime(lifetimeInSeconds),
  });
};

export const removeClientCookie = (name: CookieName) => {
  destroyCookie(null, name, {
    path: '/',
  });
};
