"use client";

import { combineReducers, createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

import { Page } from "@/types/page";
import { pageReducer, settingsReducer } from "@/reducers";
import { Display } from "@/components/Display";
import { Settings } from "@/components/Settings";

const rootReducer = combineReducers({
  page: pageReducer,
  settings: settingsReducer,
});
const store = createStore(rootReducer);

const Home = () => {
  const activePage = useSelector((state: any) => state.page);
  const dispatch = useDispatch();

  return (
    <main className="text-center pt-6">
      {activePage === Page.Display && <Display />}
      {activePage === Page.Setting && <Settings />}
    </main>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
