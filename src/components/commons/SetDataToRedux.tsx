"use client";

import { useEffect } from "react";

import { IUserInfo } from "@/types/user";
import { useAppDispatch } from "@/hooks/store";
import { setUserProps } from "@/reduxs/UserSlice";

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
