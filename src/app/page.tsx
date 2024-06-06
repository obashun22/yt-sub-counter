"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import { combineReducers, createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

import { Page } from "@/types/page";
import { pageReducer, settingsReducer } from "@/reducers";
import { Display } from "@/components/Display";
import { Settings } from "@/components/Settings";
import { PageActionType } from "@/types/actions";

const rootReducer = combineReducers({
  page: pageReducer,
  settings: settingsReducer,
});
const store = createStore(rootReducer);

const Home = () => {
  const activePage = useSelector((state: any) => state.page);
  const dispatch = useDispatch();

  const switchPage = () => {
    dispatch({
      type: PageActionType.SET_PAGE,
      page: activePage === Page.Display ? Page.Setting : Page.Display,
    });
  };

  return (
    <main className="text-center">
      <Button
        color="primary"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={switchPage}
      >
        Switch
      </Button>
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
