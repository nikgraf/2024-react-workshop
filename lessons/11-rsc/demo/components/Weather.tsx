export const Weather = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const data = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`
  ).then((response) => response.json());

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
};
