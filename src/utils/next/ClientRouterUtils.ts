import { useRouter } from "next/router";

import { getClientCookie } from "src/utils/next/ClientCookieUtils";

export const useRequireNoToken = () => {
  const router = useRouter();

  const token = getClientCookie("token");

  if (token) {
    router.replace("/");

    return { redirect: true };
  }

  return { redirect: false };
};
