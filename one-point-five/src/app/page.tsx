"use client";

const Tooltip = ({ message, children }: { message: string; children: React.ReactNode }) => (
  <span className="relative group cursor-pointer inline-block align-baseline">
    {children}
    <span className="ml-0.5 text-xs text-yellow-400 align-baseline" style={{ fontSize: '0.85em', lineHeight: 1 }}>*</span>
    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2 w-64 p-2 rounded-sm bg-white text-black text-xs z-20 shadow-lg border border-black whitespace-normal text-left">
      {message}
    </span>
  </span>
);

const bioContent = (
  <>
    Kris Atteh{' '}
    <Tooltip message="My Ghanaian (Twi) name, meaning I am the first of twins & born on a Monday">Kojo</Tooltip>{' '}
    Aziabor is a chameleon, constantly shifting between making products, fine arts, & written works to uplift collective memories and knowledge above all else.
    <br /><br />
    In his third year at Yale University, he leads the college&apos;s undergrad design studio –{' '}
    <a href="https://designatyale.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:text-gray-600">
      Design at Yale
      <span className="ml-1 text-base align-middle" aria-hidden="true">↗</span>
    </a>
    {' '}– and majors in Computing and the Arts.
    <br /><br />
    Software (full-stack) at{' '}
    <a href="https://www.fidelity.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:text-gray-600">
      Fidelity Investments
      <span className="ml-1 text-base align-middle" aria-hidden="true">↗</span>
    </a>{' '}since 2024 and formerly{' '}
    <a href="https://cyclio.webflow.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:text-gray-600">
      cyclio
      <span className="ml-1 text-base align-middle" aria-hidden="true">↗</span>
    </a>.
  </>
);

const defaultBio = (
  <div className="bio-content">
    <p className="mb-4 font-[family-name:var(--font-albragrotesk)] text-sm">
      {bioContent}
    </p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <main className="w-full h-full min-h-screen min-w-0">
        {/* Desktop & Mobile: Bottom Left Corner Content */}
        <div
          className="absolute left-0 bottom-0 p-6 md:p-12 max-w-lg w-full md:w-auto"
          style={{ zIndex: 10 }}
        >
          {/* Description Text (Bio or Project Description) */}
          <div className="text-sm font-[family-name:var(--font-albragrotesk)] mb-8 text-left">
            {defaultBio}
          </div>

          {/* External Links Menu - positioned below bio and aligned with text start */}
          <div className="flex flex-wrap text-xs justify-start w-full">
            <a
              href="https://product.krisaziabor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6 font-[family-name:var(--font-albragrotesk)] uppercase tracking-wider hover:text-gray-600 flex items-center"
            >
              PRODUCT WORK
              <span className="ml-1 text-base align-middle" aria-hidden="true">↗</span>
            </a>

          </div>
        </div>
      </main>
    </div>
  );
}
