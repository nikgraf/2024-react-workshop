import { Suspense, use, useRef } from "react";
import { sleep } from "../utils/sleep";

type Data = { id: string; name: string | null };

const loadProfile = async (id: string): Promise<Data> => {
  console.log("Loading profile");
  await sleep();
  return { id, name: "Jane" };
};

// NOTE: useless except for static data to be loaded on pageload
// const profilePromise = loadProfile("1");

// export const ProfileDetails: React.FC = () => {
//   const profile = use(profilePromise);
//   // const profile = use(loadProfile("1"));

//   return <div>{profile.name}</div>;
// };

// NOTE: called quite often, but only used on the first mount
export const ProfileDetails: React.FC = () => {
  // useRef will only invoke the function once
  const profilePromiseRef = useRef(loadProfile("1"));
  const profile = use(profilePromiseRef.current);

  return <div>{profile.name}</div>;
};

export const Profile: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileDetails />
    </Suspense>
  );
};
