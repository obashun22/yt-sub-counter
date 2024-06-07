import { Settings } from "@/types";
import { SettingsActionType } from "@/actions";

export const setSettings = (settings: Settings) => ({
    type: SettingsActionType.SET_SETTINGS,
    settings: settings
})