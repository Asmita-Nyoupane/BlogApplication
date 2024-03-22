import styles from "../../blog.module.css";
import getblogs from "../../../../services/getblogs";
import blogdetail from "../../../../services/blogdetail";
export default async function Page({ params }) {
  const { blogpost: slug } = params;
  const content = await blogdetail(slug);
  const blog = JSON.parse(content);

  if (!blog) return <div>Loading...</div>;

  return (
    <>
      <div className={styles.container}>
        <h1>{blog.title}</h1>
        <hr />
        <div className={styles.main}>{blog.description}</div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  // fetch all available blog post slugs
  const data = await getblogs();

  // create params with those slugs
  const params = data.map((slug) => ({
    params: { blogpost: slug },
  }));

  return params;
}
