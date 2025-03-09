import React from "react";
import PhotoSeriesTemplate from "../templates/photo-template";

const photos = [
  {
    id: 6,
    title: "Untitled (BLACK BLUE BLACK BOY)",
    typeID: 2,
    description: (
      <>
        <p>
          2025. Inkjet prints. Digital medium format.
          <br />
          <br />
          Bless Carrie Mae Weems.
        </p>
      </>
    ),
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
          },
          // Add more images as needed
        ]}
        description=""
      />
    ),
  },
  {
    id: 9,
    title: "Olde Common",
    description: "2024. Arcylic and oil on canvas. 8.5 x 11'.",
    typeID: 2,
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
    typeID: 2,
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
    description: (
      <p>
        2022. Inkjet prints. DSLR.
        <br />
        <br />
        Forever grateful for Anushka Bhat & Hector Membreno-Canales.
      </p>
    ),
    typeID: 2,
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
];

export default photos;
