import { useDispatch, useSelector } from "react-redux";
import { Button, Container, TextField, Slider } from "@mui/material";

import { Page, Settings as SettingsType } from "@/types";
import { setSettings } from "@/action_creaters/settingsActions";
import { setPage } from "@/action_creaters";
import Image from "next/image";

export const Settings = () => {
  const settings: SettingsType = useSelector((state: any) => state.settings);
  const dispatch = useDispatch();

  const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "imageFile":
        if (e.target.files && e.target.files[0]) {
          const newSettings: SettingsType = {
            ...settings,
            [name]: e.target.files[0],
          };
          dispatch(setSettings(newSettings));
        }
        return;
      case "startSubsCount":
      case "endSubsCount":
      case "delaySec":
        const numValue = parseInt(value, 10);
        if (!Number.isNaN(numValue)) {
          const newSettings: SettingsType = { ...settings, [name]: numValue };
          dispatch(setSettings(newSettings));
        }
        break;
      default:
        const newSettings: SettingsType = { ...settings, [name]: value };
        dispatch(setSettings(newSettings));
        break;
    }
  };
  const moveToDisplay = () => {
    dispatch(setPage(Page.Display));
  };

  return (
    <Container maxWidth="sm" className="text-left">
      <h1 className="text-3xl font-bold mb-2">YouTube Subscriber Counter</h1>
      <h2 className="text-2xl text-left">Settings</h2>
      <form>
        <div className="my-4">
          <TextField
            name="channelName"
            label="Channel Name"
            fullWidth
            size="small"
            value={settings.channelName}
            onChange={handleSettingsChange}
          />
        </div>
        <div className="my-4">
          <div className="flex">
            <TextField
              name="startSubsCount"
              type="number"
              label="Count from"
              size="small"
              fullWidth
              value={settings.startSubsCount}
              onChange={handleSettingsChange}
            />
            <div className="w-8" />
            <TextField
              name="endSubsCount"
              type="number"
              label="Count to"
              size="small"
              fullWidth
              value={settings.endSubsCount}
              onChange={handleSettingsChange}
            />
          </div>
        </div>
        <div className="my-4">
          <p>Count up after {settings.delaySec} sec.</p>
          <Slider
            name="delaySec"
            value={settings.delaySec}
            valueLabelDisplay="auto"
            min={0}
            max={60}
            onChange={(_, value) =>
              handleSettingsChange({
                target: { name: "delaySec", value },
              } as any)
            }
          />
        </div>
        <div className="my-4">
          {settings.imageFile && (
            <Image
              src={URL.createObjectURL(settings.imageFile)}
              alt="User Icon"
              width={120}
              height={120}
              className="my-4 w-[120px] h-[120px] rounded-full object-cover"
            />
          )}
          <Button component="label" variant="outlined">
            Upload Profile Image
            <input
              name="imageFile"
              type="file"
              accept="image/*"
              hidden
              onChange={handleSettingsChange}
            />
          </Button>
        </div>
        <div className="text-center">
          <Button
            color="primary"
            variant="contained"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            sx={{ textTransform: "none" }}
            onClick={moveToDisplay}
          >
            Show Counter
          </Button>
        </div>
      </form>
    </Container>
  );
};
