"use client";

export default function Smiley() {
  const smiley = ":)";

  return (
    <span
      onClick={() => console.log(`yay ${smiley}`)}
      className="cursor-default text-[color:rgb(var(--background-rgb))]"
    >
      {smiley}
    </span>
  );
}
