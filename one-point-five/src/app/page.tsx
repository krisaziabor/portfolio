"use client";

import { useRef } from "react";
import ReactMarkdown from "react-markdown";

const bioMarkdown = `
Kris Atteh Kojo Aziabor is a chameleon, constantly shifting between making products, fine arts, & written works to uplift collective memories and knowledge above all else.

In his third year at Yale University, he leads the college's undergrad design studio – [Design at Yale](https://designatyale.com) – and majors in Computing and the Arts.

Previously software (full-stack) at [Fidelity Investments](https://www.fidelity.com/) and [cyclio](https://cyclio.webflow.io/).
`;

const defaultBio = (
  <div className="bio-content">
    <ReactMarkdown
      components={{
        // Style paragraphs with appropriate spacing and font
        p: ({ ...props }) => (
          <p
            className="mb-4 font-[family-name:var(--font-fragment-sans)]"
            {...props}
          />
        ),
        a: ({ ...props }) => (
          <a
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
            }}
          >
      {bioMarkdown}
    </ReactMarkdown>
  </div>
);

export default function Home() {
  // Create refs for the navigation container and content container
  const mobileContentContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-offwhite text-black">
      <main className="flex justify-center min-h-screen">
        <div className="w-full max-w-6xl min-h-screen relative">
          {/* Desktop layout */}
          <div className="hidden md:flex h-screen">
            {/* Main content area split into two columns */}
            <div className="flex w-full h-full">
              {/* Center column containing description and links, vertically centered */}
              <div className="w-full flex flex-col items-center">
                {/* Description and links container - centered vertically and horizontally */}
                <div className="h-full flex flex-col justify-center items-center max-w-lg">
                  {/* Description Text (Bio or Project Description) - left aligned text but centered container */}
                  <div className="text-sm font-[family-name:var(--font-fragment-sans)] mb-6 text-left">
                    {defaultBio}
                  </div>

                  {/* External Links Menu - positioned below bio and aligned with text start */}
                  <div className="flex flex-wrap text-sm justify-start w-full">
                    <a
                      href="https://product.krisaziabor.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 font-[family-name:var(--font-bold-semi-diatype)] uppercase tracking-wider hover:text-gray-600"
                    >
                      Product
                    </a>
                    <span className="mr-6 font-[family-name:var(--font-bold-semi-diatype)] uppercase tracking-wider text-gray-400 cursor-not-allowed">
                      Fine Arts
                    </span>
                    <span className="font-[family-name:var(--font-bold-semi-diatype)] uppercase tracking-wider text-gray-400 cursor-not-allowed">
                      Writing
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Titles - Hidden, but moved outside the columns to fix structure */}
          </div>

          {/* Mobile layout */}
          <div className="block md:hidden">
            {/* Content area - centered */}
            <div ref={mobileContentContainerRef} className="pt-4 px-4 flex flex-col items-center justify-center min-h-screen">
              {/* Description Text - left aligned but centered container */}
              <div className="text-sm font-[family-name:var(--font-fragment-sans)] mb-2 text-left max-w-md">
                {defaultBio}
              </div>
              
              {/* Links directly below the text, aligned with text start */}
              <div className="flex flex-wrap justify-start mt-2 w-full max-w-md">
                <a
                  href="https://product.krisaziabor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 font-[family-name:var(--font-bold-semi-diatype)] uppercase tracking-wider text-base hover:text-gray-600"
                >
                  Product
                </a>
                <span className="mr-6 font-[family-name:var(--font-bold-semi-diatype)] uppercase tracking-wider text-base text-gray-400 cursor-not-allowed">
                  Fine Arts
                </span>
                <span className="font-[family-name:var(--font-bold-semi-diatype)] uppercase tracking-wider text-base text-gray-400 cursor-not-allowed">
                  Writing
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
