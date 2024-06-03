"use client";

import { useState } from "react";

import { Display } from "@/components/Display";
import {
  Button,
  ButtonBase,
  Container,
  FormGroup,
  FormLabel,
  Input,
  TextField,
} from "@mui/material";

enum Page {
  Setting,
  Display,
}

export default function Home() {
  const [activePage, setActivePage] = useState(Page.Setting);
  return (
    <main className="text-center">
      <Button
        color="primary"
        onClick={() =>
          setActivePage(
            activePage === Page.Display ? Page.Setting : Page.Display
          )
        }
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Switch
      </Button>
      {activePage === Page.Display && (
        <Display
          imageUrl="/vercel.svg"
          channelName="Vercel"
          startSubsCount={1000}
          endSubsCount={2000}
        />
      )}
      {activePage === Page.Setting && (
        <Container maxWidth="sm" className="text-left">
          <h1 className="text-3xl font-bold mb-2">
            YouTube Subscriber Counter
          </h1>
          <h2 className="text-2xl text-left">Settings</h2>
          <form>
            <div className="my-4">
              <TextField
                id="channel-name"
                label="Channel Name"
                fullWidth
                size="small"
              />
            </div>
            <div className="my-4">
              <div className="flex">
                <TextField
                  id="subs-count-from"
                  type="number"
                  label="Count from"
                  size="small"
                  fullWidth
                />
                <div className="w-8" />
                <TextField
                  id="end-subs-count"
                  type="number"
                  label="Count to"
                  size="small"
                  fullWidth
                />
              </div>
            </div>
            <div className="my-4">
              <TextField
                id="image-url"
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
                onClick={() => setActivePage(Page.Display)}
              >
                Show Counter
              </Button>
            </div>
          </form>
        </Container>
      )}
    </main>
  );
}
