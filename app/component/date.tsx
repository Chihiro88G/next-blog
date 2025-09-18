import getMonthName from "../lib/getMonthName";

export default function Date({ children }: { children: number }) {
  const date = children.toString();
  const year = date.substring(0, 4);
  const month = getMonthName(parseInt(date.substring(5, 6)));
  const day = date.substring(7, 8);

  return <p className="blog-date">{year} {month} {day}</p>
}