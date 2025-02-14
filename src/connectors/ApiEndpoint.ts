export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/v1/auth/login",
    LOGOUT: "/api/v1/auth/logout",
    REFRESH_TOKEN: "/api/v1/auth/refresh-token",
    VERIFY_TOKEN: "/api/v1/auth/verify-token",
    OUTBOUND: "/api/v1/auth/outbound",
  },
  USER: {
    LIST: "/api/v1/User",
    UPDATE: "/api/v1/User",
    FORGOT_PASSWORD: "/api/v1/User/forget-password",
  },
  CUSTOMER: {
    CREATE: "/api/v1/Customer",
    IMPORT: "/api/v1/Customer/import",
    DETAIL: (id: string) => `/api/v1/Customer/${id}`, // Dùng backtick `
  },
  ATTRIBUTE: {
    CREATE: "/api/v1/Attribute",
    UPDATE: "/api/v1/Attribute",
    DELETE: (id: string) => `/api/v1/Attribute/${id}`, // Dùng backtick `
  },
} as const;
