import { Login } from "../components/Login";

export default async function Page() {
  // const name = await getName();

  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen">
      <Login />
    </div>
  );
}
