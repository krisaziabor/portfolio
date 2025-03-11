import React from "react";
import CaseStudyTemplate from "../templates/case-study-template";
import { generateCaseStudyDescription } from "../templates/case-study-template";
import PasswordProtected from "../templates/password-protected";

const fidelity = {
  id: 3,
  title: "Fidelity Investments",
  typeID: 1,
  description: generateCaseStudyDescription({
    description:
      "June-August 2024. Ushering in a new era of secure file transferring at Fidelity Investments.",
    workType: "Internship (Fidelity Investments)",
    discipline: "Full-stack software engineering",
    techStack: "AWS, Linux, Windows, Python Django Terraform",
    acknowledgements:
      "Jenny Nguyen, Shashwat Ghevde, Alec Chum, Nikki Bratten, and the rest of the MFT & CAPE team.",
  }),

  content: (
    <PasswordProtected
      password="MMKFidtern24@@" // Replace with your actual password
      message="Due to a signed NDA, I cannot publicly disclose the contents of this case study. If you think you should have access, [email me](mailto:kris.aziabor@yale.edu). If you have the password, enter here:"
    >
      <CaseStudyTemplate
        coverImage={{
          src: "/Fidelity.jpg",
          alt: "",
        }}
        metadata={{
          description:
            "Software moves slowly at Fidelity. At a company where a reputation of dependency means everything, trusted and established products will always reign supreme over flashy but potentially volatile newcomers. However, the deprecation of once powerful tools brought the company to a point where change in the Managed File Transfer (MFT) space had to be embraced. Coming in with fresh eyes and zero background in MFT software, it was my job to help push Fidelity’s file transferring practices into a new exciting era.",
          workType:
            "Coursework (Interactive Design and the Internet: Software for People & upcoming thesis)",
          discipline: "Product design, Product research",
          techStack: "Figma",
          acknowledgements: "Zack Hauptman, Alvin Ashiatey, Theo Haggins",
        }}
        content={`
  Software moves slowly at Fidelity. At a company where a reputation of dependency means everything, trusted and established products will always reign supreme over flashy but potentially volatile newcomers. However, the deprecation of once powerful tools brought the company to a point where change in the Managed File Transfer (MFT) space had to be embraced. Coming in with fresh eyes and zero background in MFT software, it was my job to help push Fidelity’s file transferring practices into a new exciting era.
  
  ### A QUICK NOTE
  Note that due to a non-disclosure agreement I signed before working as an intern, I was unable to take any work produced with me after the internship concluded. 
  The case study text and corresponding visuals are limited in detail and were produced in retrospect.
  If you would like further information, please reach out to me <3 

  ## BACKGROUND
  ### ME & FIDELITY
  In January 2024, I signed an offer to join Fidelity in the summer as a full-stack software engineering intern. 
  As a member of CAPE (Cloud and Platform Engineering), I sat on the Managed File Transfer (MFT) team alongside two other interns.
  Initially tasked only with producing a feasibility study for a third-party MFT application, we pitched and then began work on a internal full-stack app MVP to provide Fidelity clients and employees with a universal MFT solution.

  ### INTRODUCTION TO MFT IN FIDELITY
  Managed file transfer (MFT) software is vital for people and groups who want to securely exchange data. A financial company like Fidelity wants to keep their intellectual property private as well as maintain a reputation as a trustworthy fiduciary. Especially given that the company wards off thousands of hackers in a given day (according to one of my bosses), powerful and easy-to-use MFT software is paramount for the company’s prospects.

  When I arrived in June, the MFT team was beginning an era of far-reaching change. The on-prem MFT servers that the company had used for several years were becoming increasingly unsustainable. Compared to the cloud, on-prem servers have a fixed price point that does not fluctuate even though usage will realistically fall and rise throughout a calendar year. Its rigidness leaves Fidelity footing an unnecessarily expensive bill while also forcing them to scramble for inefficient backup options in the event of an outage. Additionally, the MFT client connected to the server no longer was supported by the vendor, meaning any vulnerability in the system would not be rectified. Finally, the outdated UI that was central to the software left employees struggling every week – many would take time out of their day to join my team’s office hours for troubleshooting. Basically, the managed file transfer systems were on the verge of being dangerously unmanaged.

  ## DELIVERABLES

  ### JSCAPE FEASIBILITY STUDY

  #### RESEARCH
  To find out what we needed from JScape, we started by looking at the functionality of the current system. From ad hoc to SFTP, we spent days testing the full set of features that the current set of products had to offer. We also attended office hours hosted by our mentors, where they would help employees set up accounts and troubleshoot. By simply sitting in the background, we quickly knew what the existing MFT tools did well and where they fell short.

  #### TESTING
  Every Tuesday and Thursday afternoon was filled with a 2.5 hour meeting with Redwood (creators of JScape) representatives, as they answered our questions and guided us through the more complex features of their product. As an intern on the team, I led several meetings by walking through the software as other members took note.

  #### DOCUMENTING & PRESENTING FINAL FINDINGS
  As the internship came to a close, we stopped meeting with Redwood and began to test the product individually. From seeing how many authentication methods are sufficiently supported to understanding what file size was too big for the server to handle, I conducted several tests and reported my findings to the leaders of CAPE and Enterprise Technology.
  While it was not a project I was expected to be given, I thought the experience of doing research on stakeholders, market competitors, and the necessary functionality of a potentially integrated product sparked my interest in product management and design to a higher level.

  ### MFT UNIVERSAL CLIENT MVP
  Maybe a week after receiving the case study project, Shash, Jenny, and I looked at each other and knew we wanted to get our hands dirty and create a full-stack project. We put together a slide deck, requested to meet with our bosses, and proposed our idea: an in-house web client bringing together multiple file protocols under a familiar UI. We knew that Fidelity employees were struggling to familiarize themselves with the nuances of each protocol’s application (SFTP, Ad Hoc, HTTPS, etc) and our coworkers in the MFT team were spending hours on call to support them. Bringing as many as the protocols together under one platform was the central goal. We used JScape’s API for all the central functionality and utilized a Python Django stack with Tailwind for seamless styling and backend management. By using the Figma handoff features, I was able to dramatically cut down time for our team between the design and implementation stages.

  Ultimately, we were able to make a full Figma prototype and break ground on the coded MVP. We would have liked to achieve more with the project, but we left our work in good hands for the rest of the team to build from our foundation.

  ## REFLECTION

  The two plus months I spent in the Merrimack office surprised me in almost every way. 

  I gained a lot of perspective on what it means to work in technology within the financial world. My co-interns and I expected to be done with the case study in a matter of weeks but we soon learned that this was naive. We needed to get past company security checkpoints, troubleshoot with outside companies, and do lots and lots of waiting. We were only able to wrap things up in our penultimate week and were not able to finalize as much of the MVP as we would have liked. This is not a damning indictment on us or the company but simply just the realities of the job – your desire to produce may be much quicker than your ability to get the job done.

  These slight disappointments exist, but they do not change the fact that the internship was a wonderful experience.

  Beyond my work as a full-stack software engineer, I had become the team’s scrum master, crafted the slides decks used in senior member presentations, and  conducted research for a product prototype. 

  In just ten weeks, I dove deep into the world of MFT (managed file transfer, a concept I had never heard of prior), presented my work to various groups of senior leadership, did work befitting of a product designer, researcher, and manager, and even sprinkled in some intense pickleball playing (me and Melissa still have our undefeated record btw).

  It was a wonderful second internship and I will forever be grateful for all who made it possible \<3

  `}
      />
    </PasswordProtected>
  ),
};

export default fidelity;
