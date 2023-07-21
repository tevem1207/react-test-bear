import { useEffect, useState } from "react";
import { Speak } from "./Speak";
import axios from "axios";

interface Props {
  deleteMemo: (id: number) => void;
}
interface Memo {
  id: number;
  content: string;
}
export const Speaks = ({ deleteMemo }: Props) => {
  const [memos, setMemos] = useState<Memo[]>();

  const getMemo = () => {
    axios
      .get<Memo[]>("http://13.125.255.21:80/memo/")
      .then(({ data }) => {
        console.log(data);
        setMemos(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMemo();
  }, []);

  return (
    <>
      {memos?.map(({ id, content }) => (
        <Speak variant="h6" callBack={() => deleteMemo(id)}>
          {content}
        </Speak>
      ))}
    </>
  );
};
