## 빠른 개요

이 저장소는 Next.js(앱 디렉터리)를 기반으로 한 정적/서버 렌더링 사이트입니다. 주요 구성 요소:

- `app/` — Next.js App Router 페이지와 레이아웃
- `content/` — 모든 MDX 문서(블로그/문서). frontmatter로 라우트와 제목을 정의함
- `components/` 및 `components/mdx/` — 재사용 컴포넌트과 MDX 전용 컴포넌트
- `scripts/` — 콘텐츠 전처리(예: `generate-posts-index.ts`, `normalize-dates.mjs`)
- `generated/` 및 `src/generated/` — 자동 생성 산출물(수정하지 마세요)

특이사항 요약: Nextra(문서 테마) + Velite(빌드 도우미)가 결합되어 있습니다. `next.config.ts`가 개발/빌드 시 Velite를 자동 실행합니다.

## 개발/빌드 워크플로

- 개발 서버: `npm run dev` (Velite가 자동으로 시작됩니다)
- 전체 빌드: `npm run build` (내부적으로 `velite build`를 먼저 실행함)
- 프로덕션 시작: `npm run start`
- Velite만 빌드/감시: `npm run velite:build` / `npm run velite:watch`
- 포스트 인덱스 생성(수동 재생성): `npm run gen:index` (scripts/generate-posts-index.ts)
- 린트: `npm run lint`

노트: `next.config.ts`의 build hook은 `process.env.VELITE_STARTED` 플래그를 사용합니다. Velite 관련 변경을 테스트할 때 이 동작을 염두에 두세요.

## 콘텐츠 및 MDX 규칙(중요)

- 모든 게시물/문서는 `content/**` 아래의 MDX 파일입니다. `scripts/generate-posts-index.ts`는 frontmatter의 `slug`와 `title` 필드를 찾습니다.
- 반드시 frontmatter에 `slug`와 `title`을 명시하세요. 누락 시 `gen:index`가 실패합니다.
  예:
  ```yaml
  ---
  title: "문서 제목"
  slug: "my-post-slug"
  date: 2024-01-01
  ---
  ```
- `scripts/normalize-dates.mjs` 같은 도구가 날짜/업데이트 형식을 정리합니다. 커밋 전에 스크립트를 실행하거나 CI에서 실행하도록 유지하세요.

## MDX 컴포넌트 확장법

- MDX 전역 컴포넌트 맵은 `mdx-components.tsx`에 정의되어 있습니다. 새로운 MDX 컴포넌트를 추가하려면 `components/mdx/`에 만들고 `mdx-components.tsx`에서 export하세요.
- 예: `RelatedPosts`는 `components/mdx/RelatedPosts.tsx`에 위치하며 `mdx-components.tsx`에서 주입됩니다.
- 참고: `next.config.ts`의 turbopack `resolveAlias`가 MDX import-source를 `./mdx-components.tsx`로 연결합니다. 이 파일을 변경하면 MDX 렌더링에 영향이 큽니다.

## 생성 파일과 편집 금지

- `generated/` 및 `src/generated/` 아래 파일은 스크립트에서 생성됩니다. 직접 수정하지 마세요; 필요 시 원본 MDX나 스크립트를 수정 후 `npm run gen:index`로 재생성하세요.

## 타입/빌드 설정에서 알아둘 것들

- `tsconfig.json`의 `paths`에 `@/.velite`가 예약되어 있습니다. Velite 관련 소스 참조 시 확장자 없이 사용됩니다.
- Next 16 및 Turbopack 설정을 사용합니다(참고: `next` 의존성 버전은 package.json 참조).

## 변경 사항 예시와 패턴

- 콘텐츠를 추가하려면: `content/<area>/<slug>.mdx` 생성 → frontmatter에 `slug`/`title` 추가 → `npm run gen:index` → dev 서버 확인
- MDX 컴포넌트 추가: `components/mdx/NewComp.tsx` 작성 → `mdx-components.tsx`에 import 및 export

## 어디를 보면 되는가 (핵심 파일)

- `next.config.ts` — Velite 시작 로직, MDX alias
- `mdx-components.tsx` — MDX 컴포넌트 맵
- `scripts/generate-posts-index.ts` — frontmatter 규칙(필수: slug, title)
- `scripts/normalize-dates.mjs` — frontmatter 날짜 정규화 도구
- `content/` — 실제 문서 소스
- `generated/posts-index.ts` — 자동 생성된 인덱스(참고용)

필요하면 이 파일을 업데이트해서 더 구체적인 CI 명령, Vercel 설정 또는 테스트 패턴을 추가할게요 — 어떤 작업을 우선으로 반영할까요?
