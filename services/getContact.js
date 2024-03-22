export default async function getContact() {
  const result = await fetch("http://localhost:3000/api/contact");
  return result.json();
}
