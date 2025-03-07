import { IUserState, IUserStateForData } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IUserState = {
  loading: true,
  userInfo: null,
  isWaitingTempJwt: true,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProps(state, action: PayloadAction<IUserStateForData>) {
      console.log("setUserProps dis path", action.payload);
      return { ...state, ...action.payload };
    },

    clearUserProps() {
      return initialState;
    },
  },
});

export const { setUserProps, clearUserProps } = UserSlice.actions;

export default UserSlice.reducer;
