export default async function blogdetail(slug) {
  const result = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  return await result.json();
}
