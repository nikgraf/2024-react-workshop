const fs = require("node:fs/promises");

export default async function Demo() {
  const dataString = await fs.readFile(`./data/ams_weather.json`, "utf8");
  const data = JSON.parse(dataString);

  const date = data.daily.time[0];
  const maxTemp = data.daily.temperature_2m_max[0];
  const minTemp = data.daily.temperature_2m_min[0];

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Date: {date}
      <br />
      Max Temp: {maxTemp}
      <br />
      Min Temp: {minTemp}
    </div>
  );
}
