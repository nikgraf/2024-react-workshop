import { Suspense } from "react";
import { AsyncWeather } from "../../../components/AsyncWeather";

export default async function Demo() {
  const viennaData = fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.374&longitude=4.8897&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin"
  )
    .then((response) => response.json())
    .then((data) => {
      return {
        name: "Vienna",
        maxTemp: data.daily.temperature_2m_max[0] as number,
        minTemp: data.daily.temperature_2m_min[0] as number,
      };
    })
    .then(async (data) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return data;
    });

  // const date = data.daily.time[0];
  // const maxTemp = data.daily.temperature_2m_max[0];
  // const minTemp = data.daily.temperature_2m_min[0];

  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Suspense fallback={<p>Loading...</p>}>
        <AsyncWeather weather={viennaData} />
      </Suspense>
    </div>
  );
}
