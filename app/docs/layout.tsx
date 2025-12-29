// app/docs/layout.tsx
import React from "react";
import { Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";

import "../../theme.config";
import "nextra-theme-docs/style.css";

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap();

  return (
    <Layout
      footer={null}     // ← 핵심: Nextra footer 제거
      pageMap={pageMap}
    >
      {children}
    </Layout>
  );
}
