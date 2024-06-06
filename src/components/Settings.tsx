import { Button, Container, TextField } from "@mui/material";
import { Page } from "@/types/page";

type Props = {
};


export const Settings = (props: Props) => {
    return (
        <Container maxWidth="sm" className="text-left">
          <h1 className="text-3xl font-bold mb-2">
            YouTube Subscriber Counter
          </h1>
          <h2 className="text-2xl text-left">Settings</h2>
          <form>
            <div className="my-4">
              <TextField
                id="channelName"
                label="Channel Name"
                fullWidth
                size="small"
              />
            </div>
            <div className="my-4">
              <div className="flex">
                <TextField
                  id="startSubsCount"
                  type="number"
                  label="Count from"
                  size="small"
                  fullWidth
                />
                <div className="w-8" />
                <TextField
                  id="endSubsCount"
                  type="number"
                  label="Count to"
                  size="small"
                  fullWidth
                />
              </div>
            </div>
            <div className="my-4">
              <TextField
                id="imageUrl"
                label="Image URL"
                fullWidth
                size="small"
              />
            </div>
            <div className="text-center">
              <Button
                color="primary"
                variant="contained"
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                sx={{ textTransform: "none" }}
                onClick={() => {}}
              >
                Show Counter
              </Button>
            </div>
          </form>
        </Container>
    );
    }