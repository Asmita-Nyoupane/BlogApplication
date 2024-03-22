import styles from "./page.module.css";
import Link from "next/link";
import getblogs from "../../services/getblogs";
export default async function Home() {
  const allblogs = getblogs();
  const blogs = await allblogs;
  const firstThreeBlogs = blogs.slice(0, 3);
  return (
    <>
      <main className={styles.main}>
        {/* <div className={styles.description}>NewEra- Blog to empower</div> */}
        <img
          src="/home.png"
          className="img-fluid rounded-2"
          alt="home-image"
          height="50%"
          width="50%"
        ></img>
        <div className={styles.centered}>
          <h1>NewEra</h1>
          <p> Explore,Learn and Grow</p>
          <Link href="/blog">
            <button type="button" className="btn btn-light mx-5">
              Explore
            </button>
          </Link>
        </div>

        <h1 className="mt-3 center "> Top Popular Blogs</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {firstThreeBlogs.map((blog, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed h1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse-${index}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse-${index}`}
                >
                  {blog.title}
                </button>
              </h2>
              <div
                id={`flush-collapse-${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">{blog.description}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
