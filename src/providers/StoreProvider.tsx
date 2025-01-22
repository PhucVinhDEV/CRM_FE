"use client";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { store } from "../reduxs/store";

persistStore(store);
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
