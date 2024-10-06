export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-end p-4 sm:p-20 font-[family-name:var(--font-abc-diatype)]">
      <main className="text-base text-left text-foreground">
        <ol>
          <li className="mb-4">
            Any ambition to create timeless work renders it lifeless.
            <br />
            Its morality and rebirth will always be the most beautiful.
          </li>

          <li className="mb-4">Kris Aziabor Dot Com, coming back soon &lt;3</li>

          <li>
            <a
              href="mailto:kris.aziabor@yale.edu?cc=kris@krisaziabor.com"
              className="hover:text-orange-400"
            >
              Request portfolio -&gt;
            </a>
          </li>
        </ol>
      </main>
    </div>
  );
}