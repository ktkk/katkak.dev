import Smiley from "./components/smiley";

export default function Home() {
  return (
    <main className="p-8 min-h-dvh flex flex-col">
      <h1>sup</h1>
      <h2>I code</h2>
      <a href="https://github.com/ktkk">
        <h6>
          <span className="text-white bg-gradient-to-r bg-clip-text from-red-500 via-green-500 to-blue-500 transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-red-500 hover:via-green-500 hover:to-blue-500">
            sometimes
          </span>
        </h6>
      </a>
      <div className="flex-grow flex items-center justify-center">
        <Smiley />
      </div>
    </main>
  );
}
