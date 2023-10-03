import { ChangeEvent, useState } from "react";
import { Button, Input } from "@mui/material";
import "./HomePage.css";

export const HomePage = () => {
  const [newSessionName, setNewSessionName] = useState("");
  const updateSessionName = (evt: ChangeEvent<HTMLInputElement>) => {
    setNewSessionName(evt.target.value);
  };
  return (
    <>
      <Input
        value={newSessionName}
        placeholder="session name"
        onChange={updateSessionName}
      />
      <Button> Add Session </Button>
    </>
  );
};
