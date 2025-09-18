import { notFound } from "next/navigation";
import { Blog } from "../type";
import Title from "@/app/component/top-title";
import Date from "@/app/component/date";

type BlogProps = {
  params: { 
    id: number
  };
}

export default async function BlogPost({ params }: BlogProps) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/blogs.json`);
  if (!res) notFound();
  
  const blogs: Blog[] = await res.json();
  const blog = blogs.find((blog: Blog) => blog.id == id);
  if (!blog) notFound();

  const paragraphs = blog.content.split('\n');

  return (
    <div>
      <Title>{blog.title}</Title>
      <Date>{blog.date}</Date>
      <div className="blog-content">
        {paragraphs.map((paragraph: string, i: number) => (
          <p key={i} className="paragraph">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}