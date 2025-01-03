import Link from "next/link";

const likes = [
  {
    title: "Freya Holmér's video on AI",
    href: "https://www.youtube.com/watch?v=-opBifFfsMY",
  },
];

export default function Likes() {
  return (
    <main className="p-8 min-h-dvh">
      <ul className="list-disc">
        {likes.map((like) => (
          <li key={like.href}>
            <Link href={like.href}>
              <span>{like.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
