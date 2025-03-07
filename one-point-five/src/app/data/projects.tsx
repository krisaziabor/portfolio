"use client";

import React, { JSX, useState } from "react";
import PhotoSeriesTemplate from "../templates/photo-template";
import WritingTemplate from "../templates/written-template";

const projectTypes = [
  {
    typeID: 1,
    name: "Product",
  },
  {
    typeID: 2,
    name: "Fine Arts",
  },
  {
    typeID: 3,
    name: "Writing",
  },
];

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "LinkUs",
    typeID: 1,
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
    typeID: 1,
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
    typeID: 1,
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
    typeID: 1,
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
  {
    id: 7,
    title:
      "Joy Crookes is Back and Less Smooth Than Ever. Chances Are You Won't Like It.",
    typeID: 3,
    description: (
      <>
        <p>
          February 23, 2025
          <br />
          <br />
          This may be my proudest piece of writing since I have arrived at Yale.
          Starting out as a first essay for Adam Sexton’s Writing about Music
          class, this piece is a review Joy Crookes’s Pass the Salt and the ways it
          shockingly disturbs the norms of mainstream music.
          <br />
          <br />
          I later sent the piece to the Yale Herald, and it was included in the
          4th issue of Volume LXXVII.
          <br />
          <br />
          More writing to come.
          <br />
          <br />
          Watch the music video for Pass the Salt <a className="underline hover:text-gray-600" href="https://www.youtube.com/watch?v=CDTAyyKsjiE">here.</a>
        </p>
      </>
    ),
    content: (
      <WritingTemplate
        content={`A sole guitar—muddled and looped—enters, then departs almost as quickly as it arrives. A grand, chilling spectacle follows: the bass line, dark and deep, hits you in a trice, takes a moment of respite, and then hits again. But as soon as you get comfortable with the instrumentation, Joy Crookes crashes somewhere between the third and fourth beat, all erratic, and proceeds to sing. Something sounds off.

The South London singer and songwriter left the British music world in 2021—at her peak. Her debut album *Skin* (2021) mesmerized critics. Adorned with a horde of five-star reviews, *Skin* was [shortlisted for the Mercury Prize](https://www.mercuryprize.com/news/2022-mercury-prize-with-free-now-albums-of-the-year-revealed) (the UK and Ireland’s annual honor for a British or Irish artist’s best album that year). Those hoping that “Pass the Salt (feat. Vince Staples),” the first single from Crookes’s upcoming sophomore release, would pick up where her work left off four years ago may not like what they hear.

Her voice sounds strange, even unnerving, on “Pass the Salt.” This is not the signature Crookes of “No Hands,” “Trouble,” or “Early.” The velvety smooth and soulful essence that melted effortlessly into her British accent on those tracks is nowhere to be found. The tone she selects is shockingly off-pitch. Instead of recalibrating, she unabashedly persists. Lines like “bitty titties but never big bress” are hard to decipher, thanks to their slurred delivery and disorienting alliteration. Delivered in her rawer-than-steak-tartare vocals, the line is unintelligible upon the first—or fifth—listen. Ending the chorus, Crookes hits the highest, most *Skin*-reminiscent note of the track so far (granted, it still sounds scratchy and out-of-sorts). She tells listeners to square up, ordering them to, “Get the words stuck in your throat, throat, throat, throat, throat, throat.” Her repetition of “throat” morphs the word into merely a sound. It—like Crookes throughout the track thus far—is unrecognizable.

While Crookes sounds unbothered by any disgust listeners may have, the stunned still share their displeasure. On one TikTok [where she sings alongside the instrumental](https://www.tiktok.com/@joycrookesmusic/video/7457615582070836512?is_from_webapp=1&sender_device=pc&web_id=7460529053163374122), viewers beg her to stop, question the selection of her vocal key, and laugh in disbelief. This came as no surprise, given the song’s stark deviation from *Skin*’s more polished sound. While Crookes cannot be easily boxed into one genre, her past works have generally abided by the conventional standards of R&B and pop. *Skin*’s decrying of British conservative politics may have been bold, but the album’s sound was still seen as refined and palatable. These values now seem like prerequisites for commercial acclaim and a place within the mainstream. If you want to be seen as more than just an alternative artist, you must optimize your craft for easy and comfortable streaming. Raw, and thus, imperfect work leads to an inability to be consumed on a mass level. 

This culture may transcend any single genre, but it is evident that it has hit R&B devastatingly hard. Summer Walker’s “[Session 32](https://open.spotify.com/track/2ktg2oZDyFAX3iY1QNkXl5?si=7c76cde988114698)” from Over It (2019) and SZA’s “[Blind](https://open.spotify.com/track/2CSRrnOEELmhpq8iaAi9cd?si=ee640c86f97149dc)” from her hit-album SOS (2022) are songs that feature imperfect guitar scratches, but they center around a voice that is angelic, addicting, and seemingly effortless. In a world where these songs have staked their claim as leading members of an R&B resurgence, Crookes’s newest work is too messy—possibly a mistake. 

For fans of the mainstream, Vince Staples's feature in “Pass the Salt” offers a saving grace. He only delivers eight bars, and unlike Crookes, chooses to stick with his signature cadence and flow. This familiar sound, however fleeting, brings comfort to fans in a song full of novelty. When Staples cedes control to Crookes, she recites the chorus once more. As the song wraps into the outro, the percussion vanishes, leaving behind just a more subdued bass. Her voice becomes more opaque, layering on top of itself and shrouding any distinct words. Ominously, her final sounds multiply before cracking into silence. 

“Pass the Salt” is scattered, incoherent, and at moments, mind-boggling. And yet, it is in these missteps where I find perfection. On my initial listen, stunned with confusion and a pinch of disgust, I stopped immediately after the first verse. But as I have walked through campus with it, showered with it, sat alone with it, the unrefined aspects of the track persuade me to press replay once more. In a musical world where many artists concede authenticity to be easily consumed,  “Pass The Salt” is a testament that Crookes will not flinch. She dares listeners to follow her into a new era, forcing fans to discard their preconceptions ahead of this new album. Don’t forget salty onlookers too—Crookes has something cooking for them as well.
`}
      />
    ),
  },
];

export { projects, projectTypes };
