import { ExpandableWeather } from "../../../components/ExpandableWeather";

export default async function Demo() {
  const data = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.374&longitude=4.8897&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin"
  ).then((response) => response.json());

  const date = data.daily.time[0];
  const maxTemp = data.daily.temperature_2m_max[0];
  const minTemp = data.daily.temperature_2m_min[0];

  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Date: {date}
      <ExpandableWeather name="Amsterdam" minTemp={minTemp} maxTemp={maxTemp}>
        <b>Nice!</b>
      </ExpandableWeather>
    </div>
  );
}
