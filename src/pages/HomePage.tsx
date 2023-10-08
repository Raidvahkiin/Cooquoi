import { Button } from "@src/components/UI/Inputs/Button";
import { Input } from "@src/components/UI/Inputs/Input";
import { createNewStorage } from "@src/services/backendClient/client";
import { ChangeEvent, useState } from "react";
import "./HomePage.css";
import "@src/index.css";
import { Grid } from "@mui/joy";

export const HomePage = () => {
  const [newStorageName, setNewStorageName] = useState("");
  const updateNewStorageName = (evt: ChangeEvent<HTMLInputElement>) => {
    setNewStorageName(evt.target.value);
  };

  const handleCreateNewStorageButtonClicked = async () => {
    if (!!newStorageName) {
      createNewStorage(newStorageName);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-800">
        Cooquoi today?
      </h1>
      <Grid container spacing={2} justifyItems="center">
        <Grid xs={8}>
          <Input
            value={newStorageName}
            placeholder="session name"
            onChange={updateNewStorageName}
          />
        </Grid>
        <Grid xs={4}>
          <Button
            onClick={handleCreateNewStorageButtonClicked}
            disabled={!newStorageName}
          >
            Add Session
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
