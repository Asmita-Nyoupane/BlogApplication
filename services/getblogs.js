export default async function getblogs() {
  const result = await fetch("http://localhost:3000/api/blogs");
  return result.json();
}
