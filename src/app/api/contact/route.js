const fs = require("node:fs").promises;
export async function POST(request) {
  try {
    let info = await request.json();
    let data = await fs.readdir("src/app/lib/contactdata");
    await fs.writeFile(
      `src/app/lib/contactdata/${data.length + 1}.json`,
      JSON.stringify(info)
    );
    return new Response(JSON.stringify(info), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to write file" }), {
      status: 500,
    });
  }
}

export async function GET(request) {
  try {
    const files = await fs.readdir("src/app/lib/contactdata");
    console.log(files);
    let allContacts = [];

    for (const file of files) {
      const filePath = `src/app/lib/contactdata/${file}`;
      const data = await fs.readFile(filePath, "utf-8");
      console.log(data);

      // Check if data is not empty before parsing
      if (data.trim() !== "") {
        allContacts.push(JSON.parse(data));
      }
    }

    return new Response(JSON.stringify(allContacts), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to read file" }), {
      status: 500,
    });
  }
}
