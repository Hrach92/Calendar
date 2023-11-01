import Cookies from "universal-cookie";

type SetTokenOptions = {
  expired: Date;
  path: string;
};
const cookies = new Cookies();
const JWT_NAME = "firebase jwt";

const getToken = (): string | undefined => cookies.get(JWT_NAME);
const setToken = (
  token: string | undefined,
  options: SetTokenOptions
): void => {
  cookies.set(JWT_NAME, token, options);
};
const deleteToken = (): void => cookies.remove(JWT_NAME, { path: "/" });

const getCookie = (cookieData: any, dataName: string): string => {
  const name = `${dataName}=`;
  const ca = cookieData?.split(";");
  if (ca)
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }

  return "";
};

const getHeaders = (
  cookie?: string,
  options?: any
): { headers: { Authorization: string } } => {
  const jwt = cookie ? getCookie(cookie, JWT_NAME) : getToken();

  const headers = {
    headers: {
      ...options,
    },
  };
  if (jwt) {
    headers.headers.Authorization = `Bearer ${jwt}`;
  }
  return headers;
};

const setTokenCookie = (token: string | undefined): void => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);

  const options = { path: "/", expired: expirationDate };
  setToken(token, options);
};

export {
  getToken,
  setToken,
  deleteToken,
  getCookie,
  getHeaders,
  setTokenCookie,
};
