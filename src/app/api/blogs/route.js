const fs = require("node:fs").promises;

export async function GET(request) {
  try {
    const data = await fs.readdir("src/app/lib/blogdata");

    let allBlogs = [];
    let myfile;
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      myfile = await fs.readFile("src/app/lib/blogdata/" + item, "utf-8");
      allBlogs.push(JSON.parse(myfile));
    }

    return new Response(JSON.stringify(allBlogs), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to read file" }), {
      status: 500,
    });
  }
}
