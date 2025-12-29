// app/docs/_categories.ts
export const CATEGORIES: Record<
  string,
  {
    order: number;
    description: string;
  }
> = {
  "안내": {
    order: 10,
    description: "사이트 이용 방법과 문서 구조에 대한 안내입니다.",
  },
  "헤미셀란": {
    order: 20,
    description: "면역계의 원리와 주요 개념을 정리한 문서 모음입니다.",
  },
  "생활면역": {
    order: 30,
    description: "일상 속 면역과 건강을 설명합니다. 생활면역을 주로 선천면역과 LPS 독소에 대한 이야기들입니다.",
  },

  "대사와 면역": {
    order: 40, 
    description: "면역반응은 metabolism과 밀접하게 관련되어 있습니다. 특히 이기적인 뇌와 이기적인 면역에 대해서 자세히 다룹니다.",
  },

  "비만 다이어트": {
    order: 50,
    description: "현재 인터넷에 잘못 알려진 정보를 수정하고, 가장 최신 정보를 제공합니다.",
  }
};
