import { IUserState, IUserStateForData } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IUserState = {
  loading: true,
  userInfo: null,
  isWaitingTempJwt: true,
};

const slice = createSlice({
  name: "User Slice",
  initialState,
  reducers: {
    setUserProps(state, action: PayloadAction<IUserStateForData>) {
      return { ...state, ...action.payload };
    },

    clearUserProps() {
      return initialState;
    },
  },
});

export const { setUserProps, clearUserProps } = slice.actions;

export default slice.reducer;
