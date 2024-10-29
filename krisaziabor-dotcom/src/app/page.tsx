import Bio from "./components/bio";
// import CV from "./components/cv/cv";

export default function Home() {
  return (
    <div className="min-h-screen bg-background grid grid-cols-1 sm:grid-cols-2 items-end p-8 sm:p-20 font-[family-name:var(--font-abc-diatype)]">
      <Bio />
      {/* <CV /> */}
    </div>
  );
}
