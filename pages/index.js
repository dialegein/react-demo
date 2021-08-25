import Link from "next/link";
const list = [
  "breakout-game",
  "infinite_scroll_blog",
  "new-year-countdown",
  "custom-video-player",
  "lyrics-search",
  "dom-array-methods",
  "meal-finder",
  "relaxer-app",
  "exchange-rate",
  "memory-cards",
  "sortable-list",
  "expense-tracker",
  "modal-menu-slider",
  "speak-number-guess",
  "form-validator",
  "movie-seat-booking",
  "speech-text-reader",
  "hangman",
  "music-player",
  "typing-game",
];
export default function Home() {
  return (
    <ul className="h-screen flex flex-col items-start justify-center text-base ml-36">
      {list.map((v) => (
        <li key={String(v)} className="hover:text-red-600 hover:underline">
          <Link href={`/${v}`}>{v}</Link>
        </li>
      ))}
    </ul>
  );
}
