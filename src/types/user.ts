export interface IUserInfo {
  id: string;
  email: string;
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
