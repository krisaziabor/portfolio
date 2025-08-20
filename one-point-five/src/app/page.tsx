const defaultBio = (
  <div className="bio-content">
    <p className="mb-6 font-[family-name:var(--font-albragrotesk)] text-sm leading-relaxed">
      Kris Aziabor is a designer & engineer combining striking and accessible
      design with powerful software to build memorable experiences.
    </p>
    <p className="mb-6 font-[family-name:var(--font-albragrotesk)] text-sm leading-relaxed">
      Going into his final year at Yale University, he leads the college&apos;s{" "}
      <a
        href="https://designatyale.com"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-60 hover:opacity-100 transition-opacity"
      >
        undergrad design studio
      </a>{" "}
      and majors in Computing and the Arts.
    </p>
    <p className="mb-6 font-[family-name:var(--font-albragrotesk)] text-sm leading-relaxed">
      Interned in software (full-stack) at{" "}
      <a
        href="https://www.fidelity.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-60 hover:opacity-100 transition-opacity"
      >
        Fidelity Investments
      </a>{" "}
      for 2 summers and formerly at{" "}
      <a
        href="https://cyclio.webflow.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-60 hover:opacity-100 transition-opacity"
      >
        cyclio
      </a>
      .
    </p>
    <p className="font-[family-name:var(--font-albragrotesk)] text-sm leading-relaxed">
      New product portfolio coming soon – view archive <a href="https://archived.krisaziabor.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">here</a>.
    </p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen text-[#171616] relative">
      <main className="w-full h-full min-h-screen min-w-0">
        {/* Bottom Left Corner Content */}
        <div
          className="absolute left-0 bottom-0 p-6 md:p-12 max-w-lg w-full md:w-auto"
          style={{ zIndex: 10 }}
        >
          {/* Description Text (Bio or Project Description) */}
          <div className="text-sm font-[family-name:var(--font-albragrotesk)] text-left">
            {defaultBio}
          </div>
          
          {/* Email - Mobile: below bio, Desktop: hidden (shown in bottom right) */}
          <div className="mt-6 md:hidden">
            <a
              href="mailto:hello@krisaziabor.com"
              className="text-sm font-[family-name:var(--font-albragrotesk)] opacity-60 hover:opacity-100 transition-opacity"
            >
              hello@krisaziabor.com
            </a>
          </div>
        </div>

        {/* Bottom Right Corner Content - Desktop only */}
        <div
          className="absolute right-0 bottom-0 p-6 md:p-12 hidden md:block"
          style={{ zIndex: 10 }}
        >
          <a
            href="mailto:hello@krisaziabor.com"
            className="text-sm font-[family-name:var(--font-albragrotesk)] opacity-60 hover:opacity-100 transition-opacity"
          >
            hello@krisaziabor.com
          </a>
        </div>
      </main>
    </div>
  );
}
