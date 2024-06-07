import { Page } from "@/types";

export enum PageActionType {
    SET_PAGE = "SET_PAGE",
}

interface SetPageAction {
    type: PageActionType.SET_PAGE;
    page: Page;
}

export type PageAction = SetPageAction;