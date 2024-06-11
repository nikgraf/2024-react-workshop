"use client";

export default function Button({ onClick }: { onClick: () => void }) {
  // console.log(onClick);

  // THIS is odd and should work 🤷
  return <button onClick={() => onClick()}>Update</button>;
}
