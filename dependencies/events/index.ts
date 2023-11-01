/* eslint-disable camelcase */
import { getAnalytics, setUserProperties, logEvent } from "firebase/analytics";
import {
  LANGUAGE_CHANGING,
  NOT_FOUND_PAGE,
  REDIRECTED_TO_NOT_FOUND_PAGE,
  SELECT_LANGUAGE,
} from "./actions";
import { Options } from "../types";
import { app } from "../firebase";

export const pageView = (url: string): void => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC_ID;
  (window as any).gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
export const sendEvent = (type: string, options: Options): void => {
  const analytics = getAnalytics();
  logEvent(analytics, type, options);
  (window as any).gtag("event", type, options);
};

export const setEventData = (
  type: string,
  options: {
    userId: string | undefined;
    phoneNumber: string | undefined;
  }
): void => {
  const analytics = getAnalytics();
  setUserProperties(analytics, options);
  (window as any).gtag("event", type, {
    user_properties: options,
  });
};

export const basicEventSender = (
  action: string,
  type: string,
  from = ""
): void => {
  const options = { action, from };
  sendEvent(type, options);
};

export const redirectedToErrorPage = (): void => {
  const options = {
    action: REDIRECTED_TO_NOT_FOUND_PAGE,
    from: window.location.pathname,
    to: "/404",
  };
  sendEvent(NOT_FOUND_PAGE, options);
};

export const changeLang = (lang: string): void => {
  const options = { SELECT_LANGUAGE, lang };
  console.log(options);

  sendEvent(LANGUAGE_CHANGING, options);
};

export const modalOpenedActions = (
  action: string,
  type: string,
  from: string
): void => {
  const options = { action, from };
  sendEvent(type, options);
};
