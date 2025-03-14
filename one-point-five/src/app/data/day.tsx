import React from "react";
import CaseStudyTemplate from "../templates/case-study-template";
import { generateCaseStudyDescription } from "../templates/case-study-template";

const designatyale = {
  id: 2,
  title: "Design at Yale",
  typeID: 1,
  description: generateCaseStudyDescription({
    description:
      "September 2024 – present. Leading Yale’s design studio and community.",
    workType: "Studio work (Design at Yale)",
    discipline: " Product design, management & consulting. Full-stack web engineering. Graphic design.",
    techStack: "Figma, InDesign, React, TypeScript, AWS, PostgreSQL, and more",
    acknowledgements:
      "The DAY Studio",
  }),
  content: (
    <CaseStudyTemplate
      coverImage={{
        src: "/AlternateCover-DAY.jpg",
        alt: "Design at Yale cover image",
      }}
      metadata={{
        description:
          "",
        workType:
          "",
        discipline: "",
        techStack: "",
        acknowledgements: "",
      }}
      content={`
  After I heard of Design at Yale for the first time, I knew it was a group I wanted to be a part of. After a rejected application my second year, I told a good friend from home that I would spend the next two semesters producing enough design work to change my fate. In September 2024, I applied once more and successfully joined the studio. After a semester of leading projects, I now proudly serve as a co-president. The DAY community is by far the most special family I’ve come across at Yale, and I couldn’t be happier to lead it.
  
  ### A QUICK NOTE
  This case study will be routinely updated as projects become finalized and can be fully shared (many are still under studio review & are for internal viewing only).

  ## STUDIO LEADERSHIP

  In my first few months in the leadership role, I have instituted some meaningful changes to make DAY better at serving its purpose: creating fantastic design & strengthening Yale;s design community.

  ### PRODUCT MANAGEMENT WORKFLOW

  #### EMBRACING IMESSAGE GCS, SAYING BYE TO SLACK
  ![DAY Messages](DAY-MESSAGE.jpg)
  ##### At some point, you have to consider that some of the least professionally-tailored tools will do the job the best.
  
  At the start of the year, the studio wanted to improve communication across teams and projects. The board decided to experiment with Slack, but it became clear most DAY conversations were happening on iMessage.
  I proposed to formalize this practice, leaving Slack behind and opting for the software our whole studio was already using.

  #### WELCOMING LINEAR
  ![DAY Domination Spreadsheet](DAY-DOMINATION.jpg)
  ##### Named the "very important master schedule for world domination," this spreadsheet was the studio's previous method of tracking projects. The principle was valuable but like Slack, it was largely unused.

  While I embraced the simplicity and familiarity of iMessage for studio communication, I pushed for the addition of professional product management software.
  [Linear](https://linear.app) is a product I have admired for years, and I was so excited to introduce it to everyone in the studio.
  By establishing a system where project leads can delegate tasks and all members can document developements in one space, my co-pres [Aditya](https://adityadas.design) and I have easily tracked progress and cut at least ten minutes of status update chats from the weekly studio meetings.

  #### FUTURE PLANS OF CLIENT DASHBOARD
  By leveraging Linear’s API via GraphQL, I am currently developing a dashboard where our clients can easily access deliverables but most importantly, have up-to-date information on the status of their projects. There will be a degree of obscurity when it comes to the information shown (all good working relationships require a degree of trust and privacy), but the website will bolster our professionalism, reduce the need for check-ins, and hopefully, make our clients’ lives easier.

  ### INCREASING ACCESSIBILITY TO DAY-LEVEL DESIGN
  When I first got rejected from DAY, I knew I needed to create more design work. The issue was I did not know where to start. A central initiative I have for the [current website](https://www.designatyale.com/) is to create a repository of resources and small quotes of advice from our designers.
  Everyone specializes in their own things, so to have a centralized place where you can find guidance across disciplines will lessen the gaps of access and foster a more inclusive design community.

  ### PROTECTING THE DAY BRAND & OUR DESIGNERS
  As co-president, I have met with long-standing clients and worked with them to improve practices of communication and product handoff. This will ensure they have designs they love every time and that our designers and their labor are respected.

  ## STUDIO WORK

  ### DAY BOOK 24 – DIRECTOR OF WEB DESIGN & DEVELOPMENT

  When I joined the studio in September, one of my first two projects was to bring our artist book to life on the web.
  I was so so happy – Gabby and Aditya had gifted me a whole baby project of my own, as I was assigned to lead all research, design, and development.

  How does one take a book & its contents and transfer it onto the web?
  Do you create the site as merely a host of static images where a user can tap through each page of the book?
  Or do you abandon all ties to the book & its aesthetics, creating something completely separate? How do you playfully sit in between these two extremes?

  #### PUBLIC FRONT-FACING SITE

  I dictated design, tech archicture/stack, and currently lead web development.
  I am using a backend of AWS & PostgreSQL alongside a frontend of Next.js & TypeScript.

  ![DAY Book 24](1-DAY.jpg)
  ##### The design for the physical DAY BOOK 24. Served as the foundation for the web design.
  \n
  ![DAY Book 24](2-DAY.jpg)
  ##### Mockup of web DAY BOOK 24. Each piece is linked to an index number which is central to navigating the site.
  ![DAY Book 24](3-DAY.png)
  ##### Main page places a index in the center of the web experience. Searching for an artist or graduation year will filter relevant pieces. Type a number on desktop to instantly jump to a single page.

  #### PRIVATE ADMIN DASHBOARD

  One of the main things I always consider when building on the web is friction. It is not something to shy away from – functionality with friction can keep users purposefully engaged and interested. At the same time, some forms of friction can detract from the user experience.

  Wanting to avoid users from leaving the site to pre-order a physical copy of the book, I used AWS Lambda & PostreSQL to allow users to purchase directly from the site. 
  In addition (and most importantly), I used the same stack alongside Clerk & Shadcn UI to create a private admin dashboard for the studio to seamlessly fulfill orders on a unified platform.

  Without this workflow, users would have to fill out a Google Form, where studio members would manually verify payments, contact users, and then fulfill orders. Not only time-consuming, this process has a high potential for inconsistencies and user error.

  ![DAY Book Admin 24](3-DAYBOOKADMIN.jpg)
  \n
  ![DAY Book Admin 24](ADMIN-DAY.jpg)
  ##### A user will request a copy of the book on the front-facing site which sends a POST request to the PostgreSQL database. When a studio member logs in on the private dashboard, the user's data will immediately be there and any member of the studio can act on it using automated tasks (such as flagging a payment method or informing the customer of a fulfillment update)

  This will radically improve the user experience on the front-facing website as well as making the studio's life easier. A win-win if I've ever seen one.

  ### YALE COMPUTER SOCIETY – CREATIVE DIRECTOR

  ![YCS Logo Marks](YCS.jpg)

  I served as the creative director for Yale Computer Society's rebrand. After a massive few years that has given the club the title of Yale's biggest CS student org, I shifted the brand into a bold yet minimalistic direction.
  
  I am currently leading design on their new website this semester.

  ### YALECLUBS – DESIGN CONSULTANT & UI/UX DESIGNER
  
  YaleClubs, a website by Yale Computer Society, requested a design consultation by DAY members. Across two meetings, Aditya, Lily, and I met with the client and offered critiques on their existing designs as well as establishing a list of priority changes to be made.

  ![YaleClubs](YaleClubs.jpg)
  ##### Mockups of organization and event modals produced during consultation with YaleClubs. 
  \n
  \n
  
  I am so excited for this club's future and cannot wait to share more of the exciting work we are cooking!
  
  ## MORE ON THE WAY <3
  ![DAY event](DAYEVENT.jpg)

  *As projects are still under studio review or are in progress, full case studies for each project will be released this summer. Talk to you soon :)
  
  Visit the DAY website [here](https://www.designatyale.com/).
  
  ## QUESTIONS/NOTES FOR MYSELF
  
  How can I best mentor and guide aspiring designers like [Gabby](https://gabrielleuy.com/) did when I was initially rejected?
  
  Don't take yourself & DAY work too seriously – keep having fun!
  
  What is my next solo DAY project?
  `}
    />
  ),
};

export default designatyale;