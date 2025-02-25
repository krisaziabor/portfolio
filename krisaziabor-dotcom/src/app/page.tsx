import Bio from "./ui/bio";

export default function Home() {
  return (
    <div className="
      min-h-screen 
      bg-background 
      flex flex-col 
      justify-center items-center        /* Center vertically & horizontally on mobile/tablet */
      sm:justify-start sm:items-start    /* Top-left on desktop */
      gap-8 sm:gap-0 
      p-8 sm:p-20 
      font-[family-name:var(--font-abc-diatype)]
    ">
      <Bio />
    </div>
  );
}