export interface IUserInfo {
  id: string; // UUID
  fullName: string; // User name
  email: string;
  dayOfBirth: string; // Date (ISO format: YYYY-MM-DD)
  roleId: string; // UUID
  profilePicture: string;
  status: string;
  lastLogin: string; // DateTime (ISO format: YYYY-MM-DDTHH:mm:ssZ)
  companyName: string;
  emailDomain: string;
  companyAddress: string;
  phoneNumber: string;
  benefit: Benefit;
}

export interface Benefit {
  name: string;
  email: number;
  customer: number;
  price: number;
}

export interface IUserState {
  loading: boolean;
  userInfo: IUserInfo | null;
  isWaitingTempJwt: boolean;
}

export interface IUserStateForData {
  loading?: boolean;
  userInfo?: IUserInfo | null;
  isWaitingTempJwt?: boolean;
}

export interface TokenResponse {
  access_token: string;
}

export interface IRequestOTPAndRegister {
  email: string;
  fullName: string;
  password: string;
  otp: string;
}
