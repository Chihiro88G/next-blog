import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="meie-script-regular toppage-title">Welcome to Chilie&apos;s Blogs</h1>
      <p className="toppage-link"><Link href='/blogs'>Check New Blogs → </Link></p>
    </>
  );
}
