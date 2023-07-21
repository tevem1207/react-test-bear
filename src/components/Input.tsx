import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";

interface Props {
  addMemo: (content: string) => void;
}

export const Input = ({ addMemo }: Props) => {
  const [content, setContent] = useState("");

  return (
    <Stack marginTop={1}>
      <TextField
        label="재민에게 하고 싶은말"
        variant="standard"
        value={content}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setContent(event.target.value);
        }}
      />
      <Button
        onClick={() => addMemo(content)}
        variant="outlined"
        sx={{ height: "100%", marginTop: 2 }}
      >
        보내기
      </Button>
    </Stack>
  );
};
