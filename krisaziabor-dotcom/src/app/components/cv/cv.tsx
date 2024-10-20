"use client";

import { softwareDesign, photo, projects } from "./lists";
import * as Collapsible from "@radix-ui/react-collapsible";
import React from "react";

export default function CV() {
  const [openSDetail, setOpenSDetail] = React.useState(null); // Use null for no open item
  const [openPDetail, setOpenPDetail] = React.useState(null); // Use null for no open item
  const [openPrDetail, setOpenPrDetail] = React.useState(null); // Use null for no open item

  return (
    <aside className="text-base text-left text-foreground place-items-end content-end mx-auto sm:mx-0 max-w-[90%] sm:max-w-none">
      <ol className="flex flex-col items-end text-right">
        <li className="mb-4 font-[family-name:var(--font-bold-abc-diatype)]">
          Software & Design
        </li>
        <ol>
          {softwareDesign.records.map((record, index) => (
            <li key={index} className="mb-1">
              <Collapsible.Root
                open={openSDetail === index}
                onOpenChange={(open) => setOpenSDetail(open ? index : null)}
              >
                <Collapsible.Trigger asChild>
                  <div
                    className={`cursor-pointer ${
                      record.status === "past"
                        ? "text-pastorange"
                        : "text-foreground"
                    }`}
                  >
                    {record.institution}, {record.position}
                  </div>
                </Collapsible.Trigger>
                <Collapsible.Content asChild>
                  <div
                    className={`mb-3 ${
                      record.status === "past"
                        ? "text-pastorange"
                        : "text-foreground"
                    }`}
                  >
                    {record.link && (
                      <>
                        <a
                          href={record.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          -&gt;
                        </a>
                      </>
                    )} {" "}
                    {record.description}
                    <br />
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
                open={openPDetail === index}
                onOpenChange={(open) => setOpenPDetail(open ? index : null)}
              >
                <Collapsible.Trigger asChild>
                  <div
                    className={`cursor-pointer ${
                      record.status === "past"
                        ? "text-pastorange"
                        : "text-foreground"
                    }`}
                  >
                    {record.institution}, {record.position}
                  </div>
                </Collapsible.Trigger>
                <Collapsible.Content asChild>
                  <div
                    className={`mb-3 ${
                      record.status === "past"
                        ? "text-pastorange"
                        : "text-foreground"
                    }`}
                  >
                    {record.link && (
                      <>
                        <a
                          href={record.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          -&gt;
                        </a>
                      </>
                    )}{" "}
                    {record.description}
                    <br />
                  </div>
                </Collapsible.Content>
              </Collapsible.Root>
            </li>
          ))}
        </ol>
        <br />
        <li className="mb-4 font-[family-name:var(--font-bold-abc-diatype)]">
          Projects
        </li>
        <ol>
          {projects.records.map((record, index) => (
            <li key={index} className="mb-1">
              <Collapsible.Root
                open={openPrDetail === index}
                onOpenChange={(open) => setOpenPrDetail(open ? index : null)}
              >
                <Collapsible.Trigger asChild>
                  <div
                    className={`cursor-pointer ${
                      record.status === "past"
                        ? "text-pastorange"
                        : "text-foreground"
                    }`}
                  >
                    {record.institution}
                  </div>
                </Collapsible.Trigger>
                <Collapsible.Content asChild>
                  <div
                    className={`mb-3 ${
                      record.status === "past"
                        ? "text-pastorange"
                        : "text-foreground"
                    }`}
                  >
                   {record.link && (
                      <>
                        <br />
                        <a
                          href={record.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          -&gt;
                        </a>
                      </>
                    )} {record.description}
                    <br />
                  </div>
                </Collapsible.Content>
              </Collapsible.Root>
            </li>
          ))}
        </ol>
        <br />
        <li className="mb-4 font-[family-name:var(--font-bold-abc-diatype)]">
          Computer Science & Fine Arts @ Yale University '26
        </li>
        <li className="font-[family-name:var(--font-bold-abc-diatype)]">
          <a href="mailto:kris.aziabor@yale.edu">Say hi :) -&gt;</a>
        </li>
      </ol>
    </aside>
  );
}
