import { notFound } from "next/navigation";
import { Blog } from "./type";
import Title from "../component/top-title";

export default async function BlogsPage() {
  const res = await fetch('http://localhost:3000/blogs.json');
  if (!res) notFound();
  const blogs = await res.json();

  return (
    <div>
      <Title>Blogs</Title>
      <table className="blogs-table">
        <thead>
          <tr>
            <th>date</th>
            <th>title</th>
          </tr>
        </thead>
        
        <tbody>
          {blogs.map((blog: Blog) => (
            <tr key={blog.id}>
              <td>{blog.date}</td>
              <td>{blog.title}</td>
            </tr>
          ))}
        </tbody>        
      </table>

    </div>
  )
}