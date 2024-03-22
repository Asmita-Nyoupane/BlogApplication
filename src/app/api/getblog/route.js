const fs = require("node:fs").promises;
// http://localhost:3000/api/getblog?slug=debugging-technique
export async function GET(request) {
  // accessing query parameters
  const searchParams = request.nextUrl.searchParams;
  const queryParamValue = searchParams.get("slug");
  console.log(queryParamValue);
  try {
    const data = await fs.readFile(
      `src/app/blogdata/${queryParamValue}.json`,
      "utf-8"
    );
    console.log(JSON.parse(data).title);

    return new Response(data, { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "No such blog found!" }), {
      status: 500,
    });
  }
}
