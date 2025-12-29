// theme.config.tsx
import React from "react";

const config = {
  logo: (
    <span className="inline-flex items-center gap-2">
      <img
        src="/brand/hemicellan-logo-korean.svg"
        alt="헤미셀란"
        className="h-6 w-auto"
      />
      <span className="font-semibold tracking-tight">hemicellan</span>
    </span>
  ),

  project: {
    link: "https://github.com/immunecube-lab/hemicellan",
  },

  footer: {
    text: (
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium">
          <img
            src="/brand/hemicellan-logo-korean.svg"
            alt="헤미셀란"
            className="h-5 w-auto opacity-80"
          />
          <span>Hemicellan</span>
        </div>

        <div className="text-foreground/60">
          헤미셀란은 선천면역을 활성화시키는 고활성 면역소재입니다.
        </div>

        <div className="text-foreground/50">
          © {new Date().getFullYear()} Hemicellan. All rights reserved.
        </div>
      </div>
    ),
  },
};

export default config;
