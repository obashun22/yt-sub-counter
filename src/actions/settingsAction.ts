import { Settings } from "@/types";

export enum SettingsActionType {
    SET_SETTINGS = "SET_SETTINGS",
}

interface SetSettingsAction {
    type: SettingsActionType.SET_SETTINGS;
    settings: Settings;
}

export type SettingsAction = SetSettingsAction;