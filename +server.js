import { json } from "@sveltejs/kit";
export async function GET() {
  let resp = await fetch(
    "https://services.surfline.com/kbyg/spots/forecasts/sunlight?spotId=5842041f4e65fad6a7708e80&days=5&intervalHours=3"
  );

  let j = await resp.json();
  console.log("resp: ", j);

  return json(j);
}
