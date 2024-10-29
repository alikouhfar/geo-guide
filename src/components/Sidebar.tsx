import { Suspense } from "react";
import Copyright from "./Copyright";
import CountryList from "./CountryList";
import CountrySearch from "./CountrySearch";
import LoadingSpinner from "./LoadingSpinner";

export default function Sidebar() {
  return (
    <aside className="w-[calc(100%-20px)] max-w-sm md:w-80 bg-zinc-800 absolute bottom-2.5 md:bottom-0 left-2.5 md:left-6 h-[calc(50%-20px)] md:h-[calc(100%-48px)] shadow-lg z-[1001] md:top-6 text-white p-5 justify-between flex flex-col">
      {/* Search */}
      <CountrySearch />
      {/* Country List */}
      <Suspense fallback={<LoadingSpinner />}>
        <CountryList />
      </Suspense>
      {/* Copyright */}
      <Copyright />
    </aside>
  );
}
