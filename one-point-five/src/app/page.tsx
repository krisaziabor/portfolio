"use client";

import { JSX, useState } from "react";
import PhotoSeriesTemplate from "./templates/photo-template";

// Import your actual project data from a separate file
import { projects } from "./data/projects";

const defaultBio =
  "Kristopher Atteh Kojo Aziabor is a product obsessive who uses design, software, & fine arts to uplift collective memories and knowledge above all else. At Yale University, he leads the college's only design studio and majors in Computing and the Arts (Computer Science & Fine Arts).";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    content: JSX.Element;
    description: string;
  } | null>(null);

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="flex justify-center min-h-screen">
        <div className="w-full max-w-6xl min-h-screen relative">
          {/* Desktop layout */}
          <div className="hidden md:flex">
            {/* Left Column - Project Content (scrollable) */}
            <div className="w-2/3 p-8">
              {selectedProject && selectedProject.content}
            </div>

            {/* Right Column - Description Text and Project Titles (sticky) */}
            <div className="w-1/3 sticky top-0 h-screen">
              <div className="p-8 h-full flex flex-col justify-between">
                {/* Description Text (Bio or Project Description) */}
                <div className="text-sm mb-8">
                  {selectedProject ? selectedProject.description : defaultBio}
                </div>

                {/* Project Titles */}
                <nav>
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className={`py-3 font-[family-name:var(--font-fragment)] cursor-pointer transition-colors duration-200 hover:text-gray-600 ${
                        selectedProject?.id === project.id
                          ? "font-[family-name:var(--font-italic-fragment)]"
                          : ""
                      }`}
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.title}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="block md:hidden">
            {/* Content area */}
            <div className="pt-4 px-4">
              {selectedProject && selectedProject.content}

              {/* Description Text (always visible on mobile too) */}
              <div className="text-sm mt-8 pb-8">
                {selectedProject ? selectedProject.description : defaultBio}
              </div>
            </div>

            {/* Fixed footer with horizontally scrolling project list */}
            <div className="fixed bottom-0 left-0 right-0 bg-white z-10 border-t border-gray-100">
              <div className="overflow-x-auto whitespace-nowrap py-4 px-4">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    className={`inline-block mr-6 last:mr-0 font-[family-name:var(--font-fragment)] transition-colors duration-200 hover:text-gray-600 ${
                      selectedProject?.id === project.id
                        ? "font-[family-name:var(--font-italic-fragment)]"
                        : ""
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
