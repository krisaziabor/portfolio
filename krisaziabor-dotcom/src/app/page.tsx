import Bio from "./components/bio";
import CV from "./components/cv/cv";

export default function Home() {
  return (
    <div className="min-h-screen bg-background grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 items-center sm:items-end gap-8 sm:gap-0 p-8 sm:p-20 font-[family-name:var(--font-abc-diatype)]">
      <Bio />
      <div className="hidden sm:block">
        <CV />
      </div>
    </div>
  );
}
