"use client";

import { JSX, useState, useEffect, useRef } from "react";

// Import your actual project data from a separate file
import { projects, projectTypes } from "./data/projects";
import RapidPhotoGallery from "./ui/flashgallery";

const defaultBio = (
  <>
    <p className="mb-4">
      Kris Atteh Kojo Aziabor is a product obsessive who uses design, software,
      & fine arts to uplift collective memories and knowledge above all else.
    </p>
    <p className="mb-4">
      In his third year at Yale University, he leads the college&apos;s undergrad
      design studio (Design at Yale) and majors in Computing and the Arts
      (Computer Science & Fine Arts). 
    </p>
    <p className="mb-4">
      He has interned at Fidelity Investments and cyclio as a full-stack software engineer.
    </p>
    <div>
      <a
      href="/KAKAResume.pdf"
      download
      className="hover:text-gray-600"
      >
      Download CV{" "}
      <span className="font-[family-name:var(--font-semi-diatype)]">
        -&gt;
      </span>
      </a>
    </div>
  </>
);

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    content: JSX.Element;
    description: string | JSX.Element;
  } | null>(null);

  // New state for mobile navigation
  const [selectedTypeID, setSelectedTypeID] = useState<number | null>(null);

  // Create refs for the navigation container and content container
  const navContainerRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const mobileContentContainerRef = useRef<HTMLDivElement>(null);

  // Group projects by type
  const groupedProjects = projectTypes.map((type) => ({
    type: type,
    projects: projects.filter((project) => project.typeID === type.typeID),
  }));

  // Enhanced setSelectedProject function to also reset scroll
  const handleProjectSelect = (project: typeof selectedProject) => {
    setSelectedProject(project);

    // Reset content scroll positions
    if (contentContainerRef.current) {
      contentContainerRef.current.scrollTop = 0;
    }

    if (mobileContentContainerRef.current) {
      window.scrollTo(0, 0);
    }
  };

  // Handle project type selection in mobile view
  const handleTypeClick = (typeID: number) => {
    setSelectedTypeID(typeID);

    // Reset horizontal scroll position when changing types
    if (navContainerRef.current) {
      navContainerRef.current.scrollLeft = 0;
    }
  };

  // Handle back button in mobile view
  const handleBackClick = () => {
    setSelectedTypeID(null);
  };

  // Force a re-render and reset scroll position when type changes
  useEffect(() => {
    if (selectedTypeID !== null && navContainerRef.current) {
      // Reset scroll position
      navContainerRef.current.scrollLeft = 0;

      // Force an update to ensure all styles are properly applied
      const forceUpdate = setTimeout(() => {
        if (navContainerRef.current) {
          // This subtle DOM manipulation forces a repaint
          const currentScroll = navContainerRef.current.scrollLeft;
          navContainerRef.current.scrollLeft = currentScroll + 1;
          navContainerRef.current.scrollLeft = currentScroll;
        }
      }, 10);

      return () => clearTimeout(forceUpdate);
    }
  }, [selectedTypeID]);

  // Reset scroll when selected project changes
  useEffect(() => {
    // Reset content scroll positions
    if (contentContainerRef.current) {
      contentContainerRef.current.scrollTop = 0;
    }

    // For mobile, use window.scrollTo
    window.scrollTo(0, 0);
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-offwhite text-black">
      <main className="flex justify-center min-h-screen">
        <div className="w-full max-w-6xl min-h-screen relative">
          {/* Desktop layout */}
          <div className="hidden md:flex">
            {/* Left Column - Project Content (scrollable but with hidden scrollbar) */}
            <div
              ref={contentContainerRef}
              className="w-2/3 p-8"
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
              `}</style>
              {/* Show selected project content or rapid photo gallery */}
              {selectedProject ? (
                selectedProject.content
              ) : (
                <RapidPhotoGallery />
              )}
            </div>

            {/* Right Column - Description Text and Project Titles (sticky) */}
            <div className="w-1/3 sticky top-0 h-screen">
              <div className="p-8 h-full flex flex-col justify-between">
                {/* Description Text (Bio or Project Description) */}
                <div className="text-sm font-[family-name:var(--font-fragment-sans)] mb-8">
                  {selectedProject ? selectedProject.description : defaultBio}
                </div>

                {/* Project Titles */}
                <nav>
                  {/* Projects grouped by type */}
                  {groupedProjects.map((group) => (
                    <div key={group.type.typeID} className="mb-4">
                      {/* Project Type Header */}
                      <div className="text-xs font-[family-name:var(--font-bold-semi-diatype)] uppercase tracking-wider mb-2 font-bold">
                        {group.type.name}
                      </div>

                      {/* Projects */}
                      {group.projects.map((project) => (
                        <div
                          key={project.id}
                          className={`py-1.5 font-[family-name:var(--font-fragment-sans)] cursor-pointer transition-colors duration-200 hover:text-gray-600 ${
                            selectedProject?.id === project.id
                              ? "text-toggled"
                              : ""
                          }`}
                          onClick={() => handleProjectSelect(project)}
                        >
                          {project.title}
                        </div>
                      ))}
                    </div>
                  ))}

                  {/* Home button */}
                  <div
                    className={`py-3 font-[family-name:var(--font-fragment)] cursor-pointer transition-colors duration-200 hover:text-gray-600 ${
                      !selectedProject ? "text-toggled" : ""
                    }`}
                    onClick={() => handleProjectSelect(null)}
                  >
                    <img
                      src={selectedProject ? "/blk-KAKA.svg" : "/gray-KAKA.svg"}
                      alt="Kristopher Atteh Kojo Aziabor"
                    />
                  </div>
                </nav>
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="block md:hidden">
            {/* Content area */}
            <div ref={mobileContentContainerRef} className="pt-4 px-4 pb-24">
              {/* Show selected project content or rapid photo gallery */}
              {selectedProject ? (
                selectedProject.content
              ) : (
                <RapidPhotoGallery />
              )}

              {/* Description Text (always visible on mobile too) */}
              <div className="text-sm mt-8 font-[family-name:var(--font-fragment-sans)] pb-24">
                {selectedProject ? selectedProject.description : defaultBio}
              </div>
            </div>

            {/* Fixed footer with navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white z-10 border-t border-gray-100">
              <div
                ref={navContainerRef}
                className="overflow-x-auto whitespace-nowrap py-4 px-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                {/* Home button with SVG toggle */}
                <button
                  className="inline-block mr-6 align-middle"
                  onClick={() => {
                    handleProjectSelect(null);
                    setSelectedTypeID(null);
                  }}
                >
                  <img
                    src={selectedProject ? "/blk-KAKA.svg" : "/gray-KAKA.svg"}
                    alt="Kristopher Atteh Kojo Aziabor"
                    className="h-6"
                  />
                </button>

                {/* Two-level navigation */}
                {selectedTypeID === null ? (
                  // First level: Show only project types
                  <>
                    {projectTypes.map((type) => (
                      <button
                        key={type.typeID}
                        className="inline-block mr-6 text-xs uppercase tracking-wider font-bold"
                        onClick={() => handleTypeClick(type.typeID)}
                      >
                        {type.name}
                      </button>
                    ))}
                  </>
                ) : (
                  // Second level: Show back button and projects for selected type
                  <>
                    <button
                      className="inline-block mr-4 text-s font-[family-name:var(--font-bold-semi-diatype)]"
                      onClick={handleBackClick}
                    >
                      ←
                    </button>

                    {/* Show projects for selected type with forced visibility */}
                    {groupedProjects
                      .find((group) => group.type.typeID === selectedTypeID)
                      ?.projects.map((project) => (
                        <button
                          key={project.id}
                          className={`inline-block mr-6 font-[family-name:var(--font-fragment-sans)] transition-none ${
                            selectedProject?.id === project.id
                              ? "text-toggled"
                              : "text-black"
                          }`}
                          onClick={() => handleProjectSelect(project)}
                        >
                          {project.title}
                        </button>
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
