import { Settings } from "@/types";
import { SettingsAction, SettingsActionType } from "@/actions";


const initSettings: Settings = {
    channelName: "NarikinTV",
    startSubsCount: 999999,
    endSubsCount: 1000000,
    imageFile: null,
    delaySec: 5,
};


export const settingsReducer = (state: Settings = initSettings, action: SettingsAction) => {
    switch (action.type) {
        case SettingsActionType.SET_SETTINGS:
            return action.settings as Settings;
        default:
            return state;
    }
}