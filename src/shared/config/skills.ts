export type Skill = {
  title: string;
  summaries: string[];
};

export const SKILLS: Skill[] = [
  {
    title: 'Overall.',
    summaries: [
      '실수는 빠르게 공유하고, 동료에게 물어보기를 부끄러워하지 않습니다.',
      '잘 모르는 부분도 포기하지 않고 끝까지 적극적으로 해결하려 노력합니다.',
      '새로운 것을 배우는 것에 두려움이 있을지언정 거부감은 없고, 많은 것을 배우고 싶습니다.',
    ],
  },
  {
    title: 'Communication.',
    summaries: [
      '솔직하고 적극적으로 커뮤니케이션 합니다.',
      'UI 변경 등 내가 귀찮은 일이 생기게 될지라도, 유저의 입장에서 불편하게 느낄만한 부분이 있다면 개선 의사를 적극적으로 피력합니다.',
      '팀원과의 소통, 그리고 유저와의 소통 모두 중요하게 생각합니다.',
    ],
  },
  {
    title: 'HTML & CSS',
    summaries: [
      '시맨틱 마크업을 준수합니다.',
      '새로운 태그나 CSS들을 지속적으로 공부하고 있습니다.',
      '반응형 웹페이지를 만들 수 있습니다.',
    ],
  },
  {
    title: 'Javascript & Typescript',
    summaries: [
      'JavaScript와 TypeScript를 사용하고, 꾸준히 공부하고 있습니다.',
    ],
  },
  {
    title: 'Next.js & React',
    summaries: [
      'React를 기본으로, Next.js 프레임워크를 사용할 수 있습니다.',
      'React Hooks를 능숙하게 사용하고, SSR을 활용할 수 있습니다.',
      '합리적으로 컴포넌트를 분리하려 노력합니다.',
    ],
  },
];
