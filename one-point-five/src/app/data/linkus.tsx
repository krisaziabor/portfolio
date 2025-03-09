import React from "react";
import CaseStudyTemplate from "../templates/case-study-template";
import { generateCaseStudyDescription } from "../templates/case-study-template";

const linkus = {
  id: 1,
  title: "LinkUs",
  typeID: 1, // Assuming 1 is for "PRODUCT" type
  // The description is now generated from the metadata
  description: generateCaseStudyDescription({
    description:
      "October 2024, February 2025 - present. Reviving Ted Nelson's vision of hypertext in a web browsing experience.",
    workType:
      "Coursework (Interactive Design and the Internet: Software for People & upcoming thesis)",
    discipline: "Product design, Product research",
    techStack: "Figma",
    acknowledgements: "Zack Hauptman, Alvin Ashiatey, Theo Haggins",
  }),
  content: (
    <CaseStudyTemplate
      coverImage={{
        src: "/Linkus.jpg",
        alt: "LinkUs cover image",
      }}
      metadata={{
        description:
          "October 2024, February 2025 - present. Reviving Ted Nelson's vision of hypertext in a web browsing experience.",
        workType:
          "Coursework (Interactive Design and the Internet: Software for People & upcoming thesis)",
        discipline: "Product design, Product research",
        techStack: "Figma",
        acknowledgements: "Zack Hauptman, Alvin Ashiatey, Theo Haggins",
      }}
      content={`
  Linkus has value everywhere, because every part of the internet – the popular, controversial & everything in between – deserves a visualized, connected, and ever-growing archive.
          
  ## BACKGROUND
  ### HYPERLINKS & THE INTERNET
  On the first day of Alvin Ashiatey’s class called “Interactive Design and the Internet – Software for People,” he showed us a video of the [first ever hypertext project](https://www.youtube.com/watch?v=En_2T7KH6RA). Engineered and designed by Ted Nelson, Xanadu Space took text documents with limiting boundaries and chose to look beyond.

  ![Linkus Image](3-Linkus.jpg)
  ##### Hypertext as it should be, in three dimensional space. It is not just blue underlined text that takes you to another web address.
  
  With Xanadu Space, software enhances the paper text experience, not just mirroring it. Parallelism, deep links, and the origin of content all are placed to the forefront.

  ### APPAUVRISSEMENT & OUR DIGITAL ERA OF DELUSION
  I want to place that background knowledge alongside the current climate of media literacy and individualism. 
  
  ![Linkus Image](1-Linkus.jpg)
  ##### Especially within the realms of lyrically-dense or content-heavy pieces of media, it is easy to look past certain nuances. At the same time, any somewhat reasonable connection can spread like wildfire (even if grossly inaccurate).

  The internet has made us more individualized and less in tune with things that don’t center us. Cyberethnographer Ruby Thelot [talks about the concept of appauvrissement](https://www.instagram.com/reel/DCZQyBbRY_z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==), the idea that culture becomes poorer due to the lack of cultivation of the audience. Now Ruby was speaking in regards to the broligarchy who leaves school ready to sink their teeth into high-paying engineering jobs while having no aesthetic ideals or understanding of art history.

  I see appauvrissement in another way. Ultra-prevalent products like TikTok and Instagram have tailored our user experiences around content they believe we will like, and we become more deeply rooted as individuals because of it. We firmly believe we are the center of the universe because of the products that tell us so. This is tragic for communities and for us as a collective. When we also consider how third spaces are vanishing, it is no surprise that we fail at media literacy and revel in our own ignorances and delusions. The self has become more important than the collective of selves – and we all suffer. 

  How do we become more informed about the media we consume? Even if you don’t think we as consumers share this obligation, I argue that internet discourse and future media/art can only thrive when people have a general shared understanding.

  ## RESEARCH

  One of the most popular media knowledge sites is Genius, where any user can contribute by explaining a song’s lyrics or any detail relevant. It features a link in one direction, with the lyrics tied to an annotation. Any given annotation may link to other songs, artists, or other pieces of media.

  ![Linkus Image](2-Linkus.jpg)

  Genius does a fantastic job displaying all this information and its users gain so much valuable & collective knowledge from it. 
  
  ![Linkus Image](16-Linkus.jpg)

  However, it is bound by text and cannot be easily consumed. How do we add a visual component to increase ease of access?

  ### EXPANSION ON CURRENT/MAINSTREAM ARCHIVES

  ![Linkus Image](4-Linkus.jpg)
  \n
  ![Linkus Image](5-Linkus.jpg)
  \n
  ![Linkus Image](6-Linkus.png)

  ## DESIGN
  ![Linkus Image](1-DemoLinkus.jpg)
  \n
  ![Linkus Image](2-DemoLinkus.jpg)
  I adopted a minimalistic UI of a search engine (Google was always in mind) and based the prototypes around two states – textual information and a visual map. Fanatics of Genius may argue that the text-dominant experience is perfect for them – they will find LinkUs to be familiar in this case. But the fundamental addition from the standard search engine is the visual map seen in the last three frames.
  \n
  ![Linkus Image](3-DemoLinkus.jpg)
  The map – in a Obsidian-like fashion consists of thin lines and circles. Each node is connected to another in some manner. When a user enters the map view for the first time, they see only the searched node highlighted.
  \n
  ![Linkus Image](4-DemoLinkus.jpg)
  By pressing on a specific node, a brief explanation appears in the bottom left, detailing the various connections between the original node and the one just selected.
  \n
  ![Linkus Image](5-DemoLinkus.jpg)
  When users want to dive deeper into a rabbit hole, they can double click on a connected node and see a whole new web. Their original node will stay preserved and they can always move back at any time.
  \n


  ## REFLECTION
  The original idea for LinkUs was a potential feature that Google could add to their search experience. However, as I look into the future for this project, it is hard to see how LinkUs’s ethos could exist alongside Google’s ambitions.

  ![Linkus Image](13-Linkus.jpg)
  \n
  Especially when you consider that Google is enabling AI responses into their default search experience, it doesn’t seem like a logical feature to add when they are trying to sell ad space and push ecommerce.
  That isn’t to say that LinkUs has no viability at all. I don’t think that’s true. It just suggests that it deserves to be an individual entity, not a browser extension or supplement to any existing web infrastructure.

  ![Linkus Image](14-Linkus.jpg)
  \n
  As I look forward and begin to think about adopting a completely new visual identity for the project, I think about the [Donald Judd Library](https://library.juddfoundation.org/).
  The website serves as a digital archive but the design is rooted in the layout of the physical library.

  What non-web institutions or spaces exist that share the same ethos at this project? How do they function, and if it is easily accessible, how can I transfer this functionality onto the web?

  As I work on this thesis in the next year, I am incredibly excited to dive deep into what this project needs. From the necessary web scraping to the artistic expression (as a CPAR major, my thesis must also stand as an individual piece in a gallery), LinkUs demands a lot of consideration and precision. But I couldn’t be more excited to pick this back up and revolutionize it.

  ![Linkus Image](15-Linkus.jpg)

  `}
    />
  ),
};

export default linkus;