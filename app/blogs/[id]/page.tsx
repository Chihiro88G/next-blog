type BlogProps = {
  params: { id: number };
}

export default async function Blog({ params }: BlogProps) {
  const { id } = await params;

  return (
    <h1>BLOG HERE id: {id}</h1>
  );
}