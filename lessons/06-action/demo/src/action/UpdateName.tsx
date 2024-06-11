import { useState, useTransition } from "react";

const successAsync = () => new Promise((resolve) => setTimeout(resolve, 2000));

// const failAsync = () => new Promise((_, reject) => setTimeout(reject, 2000));

export const UpdateName: React.FC = () => {
  const [name, setName] = useState("");
  const [serverName, setServerName] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async () => {
    await successAsync();
    console.log("Name", name);
    setServerName(name);
  };

  // const handleSubmit = () => {
  //   startTransition(async () => {
  //     await successAsync();
  //     console.log("Name", name);
  //     setServerName(name);
  //   });
  // };

  // console.log("isPending", isPending);

  // const handleSubmit = () => {
  //   startTransition(async () => {
  //     await failAsync();
  //   });
  // };

  return (
    <div>
      <div>Name: {name}</div>
      <div>Servername: {serverName}</div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
    </div>
  );
};
