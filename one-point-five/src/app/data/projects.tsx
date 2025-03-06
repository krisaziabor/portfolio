"use client";

import React, { JSX, useState } from "react";
import PhotoSeriesTemplate from "../templates/photo-template";

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "LinkUs",
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-2">LinkUs</h2>
        <p className="mb-4">
          This is a description of LinkUs. Replace this with your actual project
          details.
        </p>
        <div className="mt-6">
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-500">
            Project Image
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Design at Yale",
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-2">Design at Yale</h2>
        <p className="mb-4">
          This is a description of Design at Yale. Replace this with your actual
          project details.
        </p>
        <div className="mt-6">
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-500">
            Project Image
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Fidelity Investments",
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-2">Fidelity Investments</h2>
        <p className="mb-4">
          This is a description of Fidelity Investments. Replace this with your
          actual project details.
        </p>
        <div className="mt-6">
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-500">
            Project Image
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "52x",
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-2">52x</h2>
        <p className="mb-4">
          This is a description of 52x. Replace this with your actual project
          details.
        </p>
        <div className="mt-6">
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-500">
            Project Image
          </div>
        </div>
      </div>
    ),
  },
  // PHOTO SERIES TEMPLATE FOR UNTITLED
  {
    id: 6,
    title: "Untitled (BLACK BLUE BLACK BOY)",
    description:
    "2025. Inkjet prints. Bless Carrie Mae Weems.",
    content: (
      <PhotoSeriesTemplate
        title="Untitled (BLACK BLUE BLACK BOY)"
        images={[
          {
            src: "/B1.JPG", // Replace with your actual image paths
          },
          {
            src: "/B2.JPG",
          },
          {
            src: "/B3.JPG",
          },
          {
            src: "/B4.JPG",
          }
          // Add more images as needed
        ]}
        description=""
      />
    ),
  },
  {
    id: 9,
    title: "Olde Common",
    description:
    "2024. Arcylic and oil on canvas. 8.5 x 11'.",
    content: (
      <PhotoSeriesTemplate
        title="Olde Common"
        images={[
          {
            src: "/OLDECOMMON.jpeg", // Replace with your actual image paths
          },
        ]}
        description=""
      />
    ),
  },
  // PHOTO SERIES TEMPLATE FOR ADS FOR SALE
  {
    id: 4,
    title: "ADS FOR SALE!",
    description: "2024. Inkjet prints.",
    content: (
      <PhotoSeriesTemplate
        title="ADS FOR SALE!"
        images={[
          {
            src: "/ADS-9.jpg",
          },
          {
            src: "/ADS-2.jpg",
          },
          {
            src: "/ADS-1.jpg",
          },
          // Add more images as needed
        ]}
        description="An examination of commercial culture and advertising spaces throughout urban environments. This series documents the physical manifestations of capitalism in public space."
      />
    ),
  },
  // PHOTO SERIES TEMPLATE FOR PANOPTICON
  {
    id: 5,
    title: "panopticon",
    description:
      "2022, modified in 2024. Inkjet prints.\n\nMy first ever photo project – impossible without Anushka Bhat & Hector Membreno-Canales.\n\nWith a series of eight monochromatic portraits, Kris Aziabor invites his subjects and his audience into the glamorous Trustees Room. Aziabor captures the raw emotions of his subjects as they conquer a space hidden from the greater community. With each frame, Aziabor poses these questions: Do our complex histories and legacies at Andover remain in this even more complicated institution long after we leave? Do our moments of pain but also our times of joy become immortal? Or, do their colors fade into the bleak and perpetual background?",
    content: (
      <PhotoSeriesTemplate
        title="panopticon"
        images={[
          {
            src: "/p01.jpg", // Replace with your actual image paths
          },
          {
            src: "/p02.JPG",
          },
          {
            src: "/p03.JPG",
          },
          {
            src: "/p04.JPG",
          },
          {
            src: "/p05.JPG",
          },
          {
            src: "/p06.JPG",
          },
          {
            src: "/p07.JPG",
          },
          {
            src: "/p08.JPG",
          },
          // Add more images as needed
        ]}
        description="2022, Inkjet prints"
      />
    ),
  },
  {
    id: 7,
    title:
      "Joy Crookes is Back and Less Smooth Than Ever. Chances Are You Won't Like It.",
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-2">Joy Crookes is Back</h2>
        <p className="mb-4">
          This is a description of the Joy Crookes project. Replace this with
          your actual project details.
        </p>
        <div className="mt-6">
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-500">
            Project Image
          </div>
        </div>
      </div>
    ),
  },
];

export { projects };
