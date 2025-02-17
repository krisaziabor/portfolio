"use client";

import { softwareDesign, photo, projects } from "../lib/cv/lists";
import * as Collapsible from "@radix-ui/react-collapsible";
import React from "react";

interface OpenSection {
  section: SectionType;
  index: number;
}

type SectionType = "softwareDesign" | "photo" | "projects";

export default function CV() {
  const [openSection, setOpenSection] = React.useState<OpenSection | null>(
    null
  );
  const [emailCopied, setEmailCopied] = React.useState(false);

  const handleOpenChange = (section: SectionType, index: number) => {
    if (openSection?.section === section && openSection.index === index) {
      setOpenSection(null);
    } else {
      setOpenSection({ section, index });
    }
  };

  const isOpen = (section: SectionType, index: number) =>
    openSection?.section === section && openSection.index === index;

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("kris.aziabor@yale.edu");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <aside className="text-base text-left text-foreground place-items-end content-end mx-auto sm:mx-0 max-w-[90%] sm:max-w-none sm:text-right sm:items-end">
      <ol className="flex flex-col items-start sm:items-end">
        <li className="mb-4 font-[family-name:var(--font-bold-abc-diatype)]">
          Software & Design
        </li>
        <ol>
          {softwareDesign.records.map((record, index) => (
            <li key={index} className="mb-1">
              <Collapsible.Root
                open={isOpen("softwareDesign", index)}
                onOpenChange={() => handleOpenChange("softwareDesign", index)}
              >
                <Collapsible.Trigger asChild>
                  <div className="cursor-help text-foreground">
                    {record.institution}, {record.position}
                  </div>
                </Collapsible.Trigger>
                <Collapsible.Content asChild>
                  <div className="mb-3 text-foreground">
                    {record.link ? (
                      <a
                        href={record.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        -&gt;
                      </a>
                    ) : (
                      "///"
                    )}{" "}
                    {record.description}
                  </div>
                </Collapsible.Content>
              </Collapsible.Root>
            </li>
          ))}
        </ol>
        <br />
        <li className="mb-4 font-[family-name:var(--font-bold-abc-diatype)]">
          Photo
        </li>
        <ol>
          {photo.records.map((record, index) => (
            <li key={index} className="mb-1">
              <Collapsible.Root
                open={isOpen("photo", index)}
                onOpenChange={() => handleOpenChange("photo", index)}
              >
                <Collapsible.Trigger asChild>
                  <div className="cursor-help text-foreground">
                    {record.institution}, {record.position}
                  </div>
                </Collapsible.Trigger>
                <Collapsible.Content asChild>
                  <div className="mb-3 text-foreground">
                    {record.link ? (
                      <a
                        href={record.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        -&gt;
                      </a>
                    ) : (
                      "///"
                    )}{" "}
                    {record.description}
                  </div>
                </Collapsible.Content>
              </Collapsible.Root>
            </li>
          ))}
        </ol>
        <br />
        <li className="mb-4 font-[family-name:var(--font-bold-abc-diatype)]">
          Coursework, Case Studies & Projects
        </li>
        <ol>
          {projects.records.map((record, index) => (
            <li key={index} className="mb-1">
              <Collapsible.Root
                open={isOpen("projects", index)}
                onOpenChange={() => handleOpenChange("projects", index)}
              >
                <Collapsible.Trigger asChild>
                  <div className="cursor-help text-foreground">
                    {record.institution}
                  </div>
                </Collapsible.Trigger>
                <Collapsible.Content asChild>
                  <div className="mb-3 text-foreground">
                    {record.link ? (
                      <a
                        href={record.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        -&gt;
                      </a>
                    ) : (
                      "///"
                    )}{" "}
                    {record.description}
                  </div>
                </Collapsible.Content>
              </Collapsible.Root>
            </li>
          ))}
        </ol>
        <br />
        <li>
          <button onClick={copyEmailToClipboard} className="hover:text-pastmaroon">
            {emailCopied ? "Email copied to clipboard!" : 'Say hi :) ->'}
          </button>
        </li>
      </ol>
    </aside>
  );
}
