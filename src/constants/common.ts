export const THEME_LOCAL_STORAGE_KEY = "theme";

export const HEADER_CURR_LANG_KEY = "Current-Lang-Key";

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
}

export enum LANGUAGE {
  VI = "vi",
  EN = "en",
}

export const LANGUAGE_LIST = [
  {
    name: "English",
    value: LANGUAGE.EN,
  },
  {
    name: "Tiếng Việt",
    value: LANGUAGE.VI,
  },
];

export const MEDIA_QUERY = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP_LAPTOP: 1028,
  BIG_SCREEN: 1280,
};

export const HARD_BTC_PRICE = 66970.56;
export const NON_THEME_PATHS = [
  "login",
  "register",
  "forgot-password",
  "verify",
];
export const NON_AUTH_PATHS = [
  "login",
  "register",
  "forgot-password",
  "verify",
];

export const KEY_JWT = "jwt";
export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE_SIZE_TRANSFER = 20;
export const KEY_QUERY_URL = "queryUrl";

export const DEFAULT_TITLE = "AEX Trade";

export const INPUT_TYPE = {
  password: "password",
  search: "search",
};

export const EMPTY_VALUE = "0";
export const GET_STATIC_IMAGE_URL = process.env.NEXT_PUBLIC_STATIC_IMAGE_URL;
export const DEFAULT_SORT = "-createdAt";
export const EMPTY_TEMPLATE = "---";
export const SELECT_ALL = "all";

export const MAX_SIZE_IMAGE = 5 * 1024 * 1000;
export const ALLOWED_IMAGE_EXTENSIONS = ["png", "jpg", "jpeg"];

export const TOAST_STATUS = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
  MESSAGE: "message",
};
