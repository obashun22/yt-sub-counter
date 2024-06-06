import { Page } from "@/types";
import { PageActionType } from "@/types/actions";

export const setPage = (page: Page) => (
    {
        type: PageActionType.SET_PAGE,
        page,
    }
)