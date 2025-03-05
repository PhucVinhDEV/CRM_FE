"use client";

import { IUserInfo } from "@/types/user";

interface IProps {
  dataCurrentUser: IUserInfo;
}

const SetDataToRedux = ({ dataCurrentUser }: IProps) => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(setUserProps({ userInfo: dataCurrentUser }));
  // }, [dataCurrentUser]);

  return null;
};

export default SetDataToRedux;
