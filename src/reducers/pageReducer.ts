import { Page } from "@/types";
import { PageAction, PageActionType } from "@/types/actions";

export const pageReducer = (state: Page = Page.Setting, action: PageAction) => {
    switch (action.type) {
        case PageActionType.SET_PAGE:
            return action.page as Page;
        default:
            return state;
    }
}