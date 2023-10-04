import { ChangeEvent, useState } from "react";
import { Button, Input } from "@mui/material";
import "./HomePage.css";
import { createNewStorage } from "../services/backendClient/client";

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
      <Input
        value={newStorageName}
        placeholder="session name"
        onChange={updateNewStorageName}
      />
      <Button
        onClick={handleCreateNewStorageButtonClicked}
        disabled={!newStorageName}
      >
        Add Session
      </Button>
    </>
  );
};
