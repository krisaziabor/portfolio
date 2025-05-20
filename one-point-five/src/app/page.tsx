"use client";

import ReactMarkdown from "react-markdown";

const bioMarkdown = `
Kris Atteh Kojo Aziabor is a chameleon, constantly shifting between making products, fine arts, & written works to uplift collective memories and knowledge above all else.

In his third year at Yale University, he leads the college's undergrad design studio – [Design at Yale](https://designatyale.com) – and majors in Computing and the Arts.

Software (full-stack) at [Fidelity Investments](https://www.fidelity.com/) since 2024 and formerly [cyclio](https://cyclio.webflow.io/).
`;

const defaultBio = (
  <div className="bio-content">
    <ReactMarkdown
      components={{
        // Style paragraphs with appropriate spacing and font
        p: ({ ...props }) => (
          <p
            className="mb-4 font-[family-name:var(--font-albragrotesk)]"
            {...props}
          />
        ),
        a: ({ ...props }) => (
          <a
            className="inline-flex items-center hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {props.children}
            <span className="ml-1 text-base align-middle" aria-hidden="true">↗</span>
          </a>
        ),
      }}
    >
      {bioMarkdown}
    </ReactMarkdown>
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
