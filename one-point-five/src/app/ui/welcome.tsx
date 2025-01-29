"use client";

import Image from "next/image";
import React from "react";

export default function Bio() {
  const [emailCopied, setEmailCopied] = React.useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("kris.aziabor@yale.edu");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-col text-base text-left text-foreground w-full">
        <div className="grid grid-cols-6 gap-4 w-full pt-2">
          <Image
            src="full.svg"
            alt="Preview of the next website's design"
            width={400}
            height={400}
            className="py-8 col-span-2"
          />
          <div className="col-span-4 flex items-center justify-center text-left">
            <div>
              <div className="mb-4">
                <p className="font-[family-name:var(--font-bold-fragment)]">
                  Coming back soon
                </p>
                <p>I&apos;m cooking something you&apos;ll love I promise.</p>
              </div>
              <div className="gap-1">
                <p className="font-[family-name:var(--font-bold-fragment)]">
                  While you wait,
                </p>
                <p>
                  <a
                    href="https://drive.google.com/file/d/1Mn_xI3rUACQbDqLsFSNp4QMrsGxEOWOs/view?usp=sharing"
                    className="hover:text-pastmaroon"
                  >
                    View my portfolio -&gt;
                  </a>
                </p>
                <p>
                  <a
                    href="https://drive.google.com/file/d/1Mn_xI3rUACQbDqLsFSNp4QMrsGxEOWOs/view?usp=sharing"
                    className="hover:text-pastmaroon"
                  >
                    Download my resume -&gt;
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/krisaziabor"
                    className="hover:text-pastmaroon"
                  >
                    Peek at my repositories -&gt;
                  </a>
                </p>
                <p>
                  <button
                    onClick={copyEmailToClipboard}
                    className="hover:text-pastmaroon"
                  >
                    {emailCopied
                      ? "Email copied to clipboard!"
                      : "Say hi :) ->"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
