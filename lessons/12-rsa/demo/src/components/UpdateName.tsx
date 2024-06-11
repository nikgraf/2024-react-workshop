"use client";

import { updateNameAction } from "../actions/updateNameAction";

type Props = { name: string };

export const UpdateName: React.FC<Props> = ({ name }) => {
  return (
    <>
      <div>Name: {name}</div>
      <button onClick={() => updateNameAction()}>Update</button>
    </>
  );
};
