import { UpdateName } from "@/components/UpdateName";

export default async function Demo() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen">
      <UpdateName username={"Jane"} />
    </div>
  );
}
