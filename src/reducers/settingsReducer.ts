import { Page, Settings } from "@/types";
import { PageActionType, SettingsAction, SettingsActionType } from "@/actions";


const initSettings: Settings = {
    channelName: "HikakinTV",
    startSubsCount: 999999,
    endSubsCount: 1000000,
    imageFile: null,
};


export const settingsReducer = (state: Settings = initSettings, action: SettingsAction) => {
    switch (action.type) {
        case SettingsActionType.SET_SETTINGS:
            return action.settings as Settings;
        default:
            return state;
    }
}