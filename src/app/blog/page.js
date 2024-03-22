import getblogs from "../../../services/getblogs";
import Link from "next/link";
export default async function blogPage() {
  const allblogs = getblogs();
  const blogs = await allblogs;
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
          {blogs &&
            blogs.map((blogItem) => {
              return (
                <div className="col mt-2" key={blogItem.slug}>
                  <div className="card " style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">
                        {blogItem.title.substr(0, 15)}..
                      </h5>
                      <p className="card-text text-start">
                        {blogItem.description.substr(0, 100)}..
                      </p>
                      <Link href={`/blog/${blogItem.slug}`}>
                        <button type="button" className="btn btn-info">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export async function generateStaticParams() {
  const allblogs = getblogs();
  const blogs = await allblogs;

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
