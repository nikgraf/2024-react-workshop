import { incrementNumberAction } from "@/actions/incrementNumberAction";
import { IncrementNumber } from "@/components/IncrementNumber";
import { IncrementNumberWithHook } from "@/components/IncrementNumberWithHook";

export default async function Demo() {
  const [data, err] = await incrementNumberAction({ number: 24 });

  if (err) {
    return <p>ohh ohhh</p>;
  }

  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen">
      <p>{data.toString()}</p>

      <IncrementNumber />
      <IncrementNumberWithHook />
    </div>
  );
}
