const cvData = {
  software: [
    {
      institution: "Design at Yale",
      position: "Studio Member",
      status: "current",
      description:
        "One of sixteen members at Yale’s only undergraduate design studio. Producing web design, development, and branding work for clients and own org.",
      link: "https://designatyale.com",
      tags: [],
    },
    {
      institution: "Fidelity Investments",
      position: "Full-Stack Software Engineering Intern",
      status: "past",
      description:
        "Worked on Fidelity’s Managed File Transfer team helping the firm shift from on-prem to cloud software solutions by leading a POC and producing additional internal prototype.",
      link: "https://fidelity.com",
      tags: [],
    },
    {
      institution: "Cyclio",
      position: "Full-Stack Software Engineering Intern",
      status: "past",
      description:
        "Worked at (now defunct) femtech health startup in Berlin, Germany. Revamped website with multi-language functionality, resolved bugs in alpha app, and create Figma prototype for improved onboarding user experience.",
      link: "https://cyclio.app",
      tags: [],
    },
    {
      institution: "Yale Visual Artists",
      position: "Project Lead & Board Member",
      status: "current",
      description: null,
      link: null,
      tags: ["extra"],
    },
    {
      institution: "The New Journal",
      position: "Web Consultant & Director",
      status: "current",
      description: null,
      link: null,
      tags: ["extra"],
    },
    {
      institution: "WORD",
      position: 'Commissioned for "WORD The Album"',
      status: "current",
      description: null,
      link: null,
      tags: ["extra"],
    },
  ],
  photo: [
    {
      institution: "Yale Pop-up",
      position: "Chief Photographer & Lead Creative Director",
      status: "current",
      description:
        "Led photography & visual expression for country’s largest collegiate student-run pop-up restaurant. Now leading greater creative direction with Issy Po.",
      link: "https://yalepopup.org",
      tags: [],
    },
    {
      institution: "Yale College Arts",
      position: "Production Photographer",
      status: "current",
      description:
        "Capturing promotional and archival photos for Yale College Arts’s performances since 2022. Photos have been featured in Yale Daily News and used for advertising group exhibitions.",
      link: null,
      tags: [],
    },
    {
      institution: "Maison at Yale",
      position: "Photographer & Co-head of Publicity",
      status: "past",
      description:
        "Produced photos for two of organization’s fashion shows and photoshoots. Later joined board, helping with publicity efforts across platforms.",
      link: "https://maisonatyale.com",
      tags: [],
    },
    {
      institution:
        "Established freelance photography business, amassing over fifteen clients in the 23-24 school year.",
      position: null,
      status: "present",
      description: null,
      link: null,
      tags: ["extra"],
    },
  ],
  projects: [
    {
      institution: "Work In Progress",
      position: null,
      description:
        "A full-stack web personal tool to optimize my product management across my multiple freelance, studio, and personal projects.",
      status: "present",
      link: null,
      tags: [],
    },
    {
      institution: "Design at Yale",
      position: "Artist Web Book",
      description:
        "Leading web design and development for Design at Yale’s second-ever artist book and first-ever website.",
      status: "present",
      link: null,
      tags: [],
    },
    {
      institution: "Design at Yale",
      position: "Y/CS",
      description:
        "Creative director for Yale Computer Society’s rebrand, producing a comprehensive brand book and set of social media post Figma templates.",
      status: "present",
      link: null,
      tags: [],
    },
    {
      institution: "ADS FOR SALE",
      position: null,
      description:
        "Ongoing photography series where I reflect on the aesthetics, values, and legacy of my freelance and institutional photo work at Yale.",
      status: "present",
      link: null,
      tags: [],
    },
    {
      institution: "panopticon",
      position: null,
      description:
        "Critiquing cycles of institutional memory and its destruction through six graduating student leaders at Phillips Academy.",
      status: "present",
      link: null,
      tags: [],
    },
    {
      institution: "Songs For You",
      position: null,
      description: null,
      status: "present",
      link: null,
      tags: ["extra"],
    },
    {
      institution: "Kris is Making a Coffee Table Book??",
      position: null,
      description: null,
      status: "present",
      link: null,
      tags: ["extra"],
    },
    {
      institution: "Premier Data Pack",
      position: null,
      description: null,
      status: "present",
      link: null,
      tags: ["extra"],
    },
  ],
};

function elements(tag) {
  for (let index = 0; index < cvData[tag].length; index++) {
    if (cvData[tag][index].position != null) {
      console.log(
        cvData[tag][index].institution + ",",
        cvData[tag][index].position
      );
    } else {
      console.log(cvData[tag][index].institution);
    }

    if (cvData[tag][index].description != null) {
      console.log("-> " + cvData[tag][index].description + "\n");
    }
  }
}

elements("software");
elements("photo");
elements("projects");
