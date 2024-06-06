import { Settings } from "@/types";
import { SettingsActionType } from "@/types/actions";

export const setSettings = (settings: Settings) => ({
    type: SettingsActionType.SET_SETTINGS,
    payload: settings
})