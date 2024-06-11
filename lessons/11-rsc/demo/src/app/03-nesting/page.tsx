import { Weather } from "../../../components/Weather";

const fs = require("node:fs/promises");

export default async function Demo() {
  const dataString = await fs.readFile(`./data/locations.json`, "utf8");
  const data = JSON.parse(dataString);

  const locations = data.locations;
  // pick a random location
  const location = locations[Math.floor(Math.random() * locations.length)];

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div>{location.name}</div>
      <Weather latitude={location.latitude} longitude={location.longitude} />
    </div>
  );
}
