"use client";

import { useAppDispatch } from "@/hooks/store";
import { setUserProps } from "@/reduxs/UserSlice";
import { IUserInfo } from "@/types/user";
import { useEffect } from "react";

interface IProps {
  dataCurrentUser: IUserInfo;
}

const SetDataToRedux = ({ dataCurrentUser }: IProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUserProps({ userInfo: dataCurrentUser }));
  }, [dataCurrentUser]);

  return null;
};

export default SetDataToRedux;
