"use client";

import { useRef } from "react";
import ReactMarkdown from "react-markdown";
import dynamic from "next/dynamic";

// Dynamically import the RapidPhotoGallery component to optimize loading
const RapidPhotoGallery = dynamic(() => import("./ui/flashgallery"), {
  ssr: false,
});

const bioMarkdown = `
Kris Atteh Kojo Aziabor is a product obsessive who uses design, software, & fine arts to uplift collective memories and knowledge above all else.

In his third year at Yale University, he leads the college's undergrad design studio ([Design at Yale](https://designatyale.com)) and majors in Computing and the Arts (Computer Science & Fine Arts).

He has interned at [Fidelity Investments](https://www.fidelity.com/) and [cyclio](https://cyclio.webflow.io/) as a full-stack software engineer.
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
            className="underline hover:text-gray-600"
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
  const navContainerRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const mobileContentContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-offwhite text-black">
      <main className="flex justify-center min-h-screen">
        <div className="w-full max-w-6xl min-h-screen relative">
          {/* Desktop layout */}
          <div className="hidden md:flex h-screen">
            {/* Main content area split into two columns */}
            <div className="flex w-full h-full">
              {/* Left Column containing just description and links, vertically centered */}
              <div className="w-1/3 flex flex-col">
                {/* Description and links container - vertically centered */}
                <div className="p-8 h-full flex flex-col justify-center">
                  {/* Description Text (Bio or Project Description) - centered vertically */}
                  <div className="text-sm font-[family-name:var(--font-fragment-sans)] mb-6 text-left">
                    {defaultBio}
                  </div>

                  {/* External Links Menu - positioned below bio */}
                  <div className="flex flex-wrap text-sm">
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

              {/* Right Column - Flash Gallery (vertically centered) */}
              <div
                ref={contentContainerRef}
                className="w-2/3 pl-4 pr-8 flex items-center justify-center h-full"
                style={{
                  /* Hide scrollbar for Chrome, Safari and Opera */
                  overflow: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <style jsx global>{`
                  /* Hide scrollbar for Chrome, Safari and Opera */
                  div::-webkit-scrollbar {
                    display: none;
                  }

                  /* Hide scrollbar for IE, Edge and Firefox */
                  div {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                  }
                  div::-webkit-scrollbar {
                    display: none;
                  }

                  /* Add transition for smoother project switching */
                  .content-transition {
                    transition: opacity 0.2s ease-in-out;
                  }
                `}</style>
                {/* Show selected project content or rapid photo gallery with transition */}
                <div className="content-transition w-full">
                  <RapidPhotoGallery />
                </div>
              </div>
            </div>

            {/* Project Titles - Hidden, but moved outside the columns to fix structure */}
          </div>

          {/* Mobile layout */}
          <div className="block md:hidden">
            {/* Content area */}
            <div ref={mobileContentContainerRef} className="pt-4 px-4 pb-24">
              {/* Show selected project content or rapid photo gallery with transition */}
              <div className="content-transition">
                <RapidPhotoGallery />
              </div>

              {/* Description Text (always visible on mobile too) */}
              <div className="text-sm mt-8 font-[family-name:var(--font-fragment-sans)] pb-24">
                {defaultBio}
              </div>
            </div>

            {/* Fixed footer with navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white z-10 border-t border-gray-100">
              <div
                ref={navContainerRef}
                className="overflow-x-auto whitespace-nowrap py-4 px-4 flex justify-center"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                {/* Three external links replacing project menu */}
                <a
                  href="https://product.krisaziabor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mr-6 font-[family-name:var(--font-bold-semi-diatype)] uppercase tracking-wider text-xs hover:text-gray-600"
                >
                  Product
                </a>
                <span className="inline-block mr-6 font-[family-name:var(--font-bold-semi-diatype)] uppercase tracking-wider text-xs text-gray-400 cursor-not-allowed">
                  Fine Arts
                </span>
                <span className="inline-block font-[family-name:var(--font-bold-semi-diatype)] uppercase tracking-wider text-xs text-gray-400 cursor-not-allowed">
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
