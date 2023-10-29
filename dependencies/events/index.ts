/* eslint-disable camelcase */
import { getAnalytics, setUserProperties, logEvent } from 'firebase/analytics';
import { Options } from '../types';
import {
	BACK_TO_PAGE,
	BOUQUET,
	CHANGE_LANGUAGE,
	ENTER_PHOTO,
	GO_BACK_TO_PAGE,
	GO_TO_HELP_PAGE,
	GO_TO_HISTORY_PAGE,
	GO_TO_HOME_PAGE,
	GO_TO_PROFILE_EDIT,
	GO_TO_PROFILE_PAGE,
	GO_TO_PROFILE_SETTINGS,
	GO_TO_SEARCH_PAGE,
	GO_TO_SIGN_IN_PAGE,
	GO_TO_SIGN_UP_PAGE,
	GO_TO_WELCOME_CATEGORY_PAGE,
	GO_TO_WELCOME_CUSTOM_WISH_PAGE,
	GO_TO_WELCOME_ENTER_PHOTO,
	GO_TO_WELCOME_FLOWER_PAGE,
	GO_TO_WELCOME_NEW_WISH,
	GO_TO_WELCOME_OPEN_COLLECTION_PAGE,
	GO_TO_WELCOME_PAGE,
	GO_TO_WELCOME_PHONE_REGISTRATION,
	GO_TO_WELCOME_BIRTHDAY_PAGE,
	HANDLE_FLOWER_CLICK,
	HELP_PAGE,
	HISTORY_PAGE,
	HOME_PAGE,
	NOT_FOUND_PAGE,
	PROFILE_EDIT,
	PROFILE_PAGE,
	PROFILE_SETTINGS,
	REDIRECTED_TO_NOT_FOUND_PAGE,
	SEARCH_PAGE,
	SELECTED_LANGUAGE,
	SEND_BOUQUET,
	SEND_BOUQUET_BY_NAME,
	SIGN_IN_PAGE,
	SIGN_OUT,
	SIGN_UP_PAGE,
	WELCOME_CATEGORY_PAGE,
	WELCOME_CUSTOM_WISH,
	WELCOME_FLOWER_PAGE,
	WELCOME_NEW_WISH,
	WELCOME_OPEN_COLLECTION_PAGE,
	WELCOME_PAGE,
	WELCOME_PHONE_REGISTRATION,
	WELCOME_BIRTHDAY_PAGE,
	GO_TO_WELCOME_CHOOSE_CATEGORY_PAGE,
	WELCOME_CHOOSE_CATEGORY_PAGE,
	GO_TO_WELCOME_HOW_YOU_SHARE_WISHES,
	WELCOME_HOW_YOU_SHARE_WISHES_PAGE,
} from './actions';
import { ROUTES } from '../constants';

export const pageView = (url: string): void => {
	const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC_ID;
	(window as any).gtag('config', GA_MEASUREMENT_ID, {
		page_path: url,
	});
};
export const sendEvent = (type: string, options: Options): void => {
	const analytics = getAnalytics();
	logEvent(analytics, type, options);
	(window as any).gtag('event', type, options);
};

export const setEventData = (
	type: string,
	options: {
		userId: string | undefined;
		phoneNumber: string | undefined;
	},
): void => {
	const analytics = getAnalytics();
	setUserProperties(analytics, options);
	(window as any).gtag('event', type, {
		user_properties: options,
	});
};

export const basicEventSender = (
	action: string,
	type: string,
	from = '',
	to = '',
	query = {},
): void => {
	const options = { action, from, to, query };
	sendEvent(type, options);
};

export const redirectedToErrorPage = (): void => {
	const options = {
		action: REDIRECTED_TO_NOT_FOUND_PAGE,
		from: window.location.pathname,
		to: ROUTES.notFound,
	};
	sendEvent(NOT_FOUND_PAGE, options);
};

export const changeLang = (lang: string): void => {
	const options = { SELECTED_LANGUAGE, lang };
	sendEvent(CHANGE_LANGUAGE, options);
};

export const goBack = (from: string, to: string): void => {
	const options = { action: GO_BACK_TO_PAGE, from, to };
	sendEvent(BACK_TO_PAGE, options);
};

export const modalOpenedActions = (action: string, type: string, from: string): void => {
	const options = { action, from };
	sendEvent(type, options);
};

export const handleClickActions = (
	action: string,
	type: string,
	page: string,
	buttonText: string | number,
	name?: string,
): void => {
	const options = { action, page, buttonText, name };
	sendEvent(type, options);
};

export const goToProfilePage = (): void =>
	basicEventSender(GO_TO_PROFILE_PAGE, PROFILE_PAGE, window.location.pathname, ROUTES.profile);

export const goToSearchPage = (): void =>
	basicEventSender(GO_TO_SEARCH_PAGE, SEARCH_PAGE, window.location.pathname, ROUTES.search);

export const goToWelcomePhoneRegistration = (): void =>
	basicEventSender(
		GO_TO_WELCOME_PHONE_REGISTRATION,
		WELCOME_PHONE_REGISTRATION,
		window.location.pathname,
		ROUTES.welcomePhoneRegistration,
	);

export const goToSignInPage = (): void => {
	basicEventSender(GO_TO_SIGN_IN_PAGE, SIGN_IN_PAGE, window.location.pathname, ROUTES.signIn);
};

export const goToSignUpPage = (): void => {
	basicEventSender(GO_TO_SIGN_UP_PAGE, SIGN_UP_PAGE, window.location.pathname, ROUTES.signUp);
};

export const goToWelcomeCollection = (): void =>
	basicEventSender(
		GO_TO_WELCOME_OPEN_COLLECTION_PAGE,
		WELCOME_OPEN_COLLECTION_PAGE,
		window.location.pathname,
		ROUTES.welcomeOpenCollection,
	);

export const goToNewWishPage = (): void =>
	basicEventSender(
		GO_TO_WELCOME_NEW_WISH,
		WELCOME_NEW_WISH,
		window.location.pathname,
		ROUTES.welcomeNewWish,
	);

export const goToProfileSettings = (): void =>
	basicEventSender(
		GO_TO_PROFILE_SETTINGS,
		PROFILE_SETTINGS,
		window.location.pathname,
		ROUTES.profileSetting,
	);

export const goToProfileEdit = (): void =>
	basicEventSender(
		GO_TO_PROFILE_EDIT,
		PROFILE_EDIT,
		window.location.pathname,
		ROUTES.profileEdit,
	);

export const goToHomePage = (): void =>
	basicEventSender(GO_TO_HOME_PAGE, HOME_PAGE, window.location.pathname, ROUTES.home);

export const goToAuthPage = (): void =>
	basicEventSender(SIGN_OUT, SIGN_OUT, window.location.pathname, ROUTES.auth);

export const goToHistoryPage = (): void =>
	basicEventSender(GO_TO_HISTORY_PAGE, HISTORY_PAGE, window.location.pathname, ROUTES.history);

export const goToHelpPage = (): void =>
	basicEventSender(GO_TO_HELP_PAGE, HELP_PAGE, window.location.pathname, ROUTES.help);

export const goToWelcomeCategoryPage = (): void =>
	basicEventSender(
		GO_TO_WELCOME_CATEGORY_PAGE,
		WELCOME_CATEGORY_PAGE,
		window.location.pathname,
		ROUTES.welcomeCategory,
	);
export const goToWelcomeChooseCategoryPage = (): void =>
	basicEventSender(
		GO_TO_WELCOME_CHOOSE_CATEGORY_PAGE,
		WELCOME_CHOOSE_CATEGORY_PAGE,
		window.location.pathname,
		ROUTES.welcomeChooseCategories,
	);
export const goToWelcomeEnterPhoto = (): void =>
	basicEventSender(
		GO_TO_WELCOME_ENTER_PHOTO,
		ENTER_PHOTO,
		window.location.pathname,
		ROUTES.welcomePhoto,
	);

export const goToWelcomePage = (): void =>
	basicEventSender(GO_TO_WELCOME_PAGE, WELCOME_PAGE, window.location.pathname, ROUTES.welcome);

export const goToWelcomeFlowersPage = (): void =>
	basicEventSender(
		GO_TO_WELCOME_FLOWER_PAGE,
		WELCOME_FLOWER_PAGE,
		window.location.pathname,
		ROUTES.welcomeFlowers,
	);

export const goToWelcomeHowYouShareWishes = (): void =>
	basicEventSender(
		GO_TO_WELCOME_HOW_YOU_SHARE_WISHES,
		WELCOME_HOW_YOU_SHARE_WISHES_PAGE,
		window.location.pathname,
		ROUTES.welcomeHowYouShareWishes,
	);

export const goToWelcomeBirthdayPage = (): void =>
	basicEventSender(
		GO_TO_WELCOME_BIRTHDAY_PAGE,
		WELCOME_BIRTHDAY_PAGE,
		window.location.pathname,
		ROUTES.welcomeBirthday,
	);

export const goToCustomWishPage = (): void =>
	basicEventSender(
		GO_TO_WELCOME_CUSTOM_WISH_PAGE,
		WELCOME_CUSTOM_WISH,
		window.location.pathname,
		ROUTES.welcomeCustomWish,
	);

export const donateEvent = (donatePage: string): void =>
	basicEventSender(GO_TO_WELCOME_PAGE, WELCOME_PAGE, window.location.pathname, donatePage);

export const handleBouquetClick = (type: string): void => {
	basicEventSender(SEND_BOUQUET, HANDLE_FLOWER_CLICK, window.location.pathname, type);
};

export const sendByName = (type?: string, name?: string): void => {
	basicEventSender(SEND_BOUQUET_BY_NAME, BOUQUET, window.location.pathname, type, name);
};
