// theme.config.tsx
import React from "react";

const config = {
  logo: (
    <span className="inline-flex items-center gap-2">
      <img
        src="/brand/hemicellan-logo-korean.svg"
        alt="Hemicellan"
        className="h-6 w-auto"
      />
      <span className="font-semibold tracking-tight">
        hemicellan
      </span>
    </span>
  ),

  project: {
    link: "https://github.com/immunecube-lab/hemicellan",
  },

  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} Hemicellan. All rights reserved.
      </span>
    ),
  },
};

export default config;
