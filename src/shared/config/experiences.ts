export type ExperienceProject = {
  title: string;
  description: string;
  techStacks: string[];
  link?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  projects: ExperienceProject[];
};

export const EXPERIENCES: Experience[] = [
  {
    company: '프리랜서',
    role: 'Frontend Developer',
    period: '2023.07 - 현재',
    projects: [
      {
        title: '`Steelbro` 홈페이지 개발',
        description:
          'TV, 실링팬 등을 시공하는 Steelbro 회사와 협업하여 대표 홈페이지와 어드민 페이지를 만들었습니다. 처음으로 FSD 아키텍처를 반영한 프로젝트이고, Parallel Route와 Intercepting Route를 사용하여 모달을 만들었습니다.',
        techStacks: [
          'Next.js',
          'Typescript',
          'Tanstack Query',
          'React-table',
          'React-hook-form',
          'scss',
        ],
      },
      {
        title: '`Studear` 홈페이지 개발',
        description:
          '오프라인 학원을 위한 온라인 강의 플랫폼인 Studear 회사와 협업하여 대표 홈페이지와 강의 페이지, 어드민 페이지까지 총 세개의 페이지를 만들었습니다. 이와 더불어 Storybook을 구축하였고, 내부 라이브러리를 Github Package로 배포하였습니다.',
        techStacks: [
          'Next.js',
          'Typescript',
          'Tanstack Query',
          'React-table',
          'React-hook-form',
          'Styled-components',
          'Storybook',
        ],
      },
    ],
  },
  {
    company: '샤플앤컴퍼니',
    role: 'Frontend Developer',
    period: '2022.10 - 2023.07',
    projects: [
      {
        title: '`shoplWorks` 홈페이지 개발',
        description:
          '간편한 근태, 손쉬운 직원 업무 관리 툴인 shoplWorks 홈페이지를 개발하였습니다. React-table & React-hook-form & Tanstack-query 등의 라이브러리를 사용하여 연차촉진, 게시판 기능을 주도적으로 개발하였고, React-query의 Query Key Factory를 직접 만들어 사용하는 등 능동적으로 업무에 임하였습니다.',
        techStacks: [
          'React',
          'Typescript',
          'Tanstack Query',
          'React-table',
          'React-hook-form',
          'Styled-components',
        ],
      },
    ],
  },
  {
    company: '웹웨어',
    role: 'Frontend Developer',
    period: '2022.07 - 2022.08',
    projects: [
      {
        title: '어드민 대시보드 페이지',
        description:
          'Highcharts로 각종 대시보드 화면 구성, React-table로 서버사이드 페이지네이션 구현, 테스트 코드 작성.',
        techStacks: [
          'Next.js',
          'TypeScript',
          'React Query',
          'Highcharts',
          'Emotion',
          'Jest',
        ],
      },
    ],
  },
  {
    company: '1MILLION DANCE STUDIO',
    role: 'Frontend Developer',
    period: '2021.12 - 2022.07',
    projects: [
      {
        title: '댄스 OTT 서비스',
        description:
          'HLS, 프리뷰, 자막, 좌우 반전, 구간 반복 등 기능의 동영상 플레이어 개발. millicast SDK(WebRTC), SockJS(WebSocket)로 실시간 라이브 방송 연동.',
        techStacks: [
          'Next.js',
          'TypeScript',
          'React Query',
          'Recoil',
          'Styled-Components',
          'HLS',
          'WebSocket',
        ],
      },
      {
        title: 'ERP',
        description:
          '기존 JSP ERP를 React로 전환. FullCalendar, React-Table로 수업 스케줄 관리 시스템 개발.',
        techStacks: [
          'Next.js',
          'React Hooks',
          'TypeScript',
          'React Query',
          'Recoil',
          'Styled-Components',
          'WebSocket',
        ],
      },
      {
        title: '‘DISTRICT’ 홈페이지',
        description:
          '댄서 누구나 강의를 오픈하고 수강생 예약/결제를 받을 수 있는 홈페이지 개발.',
        techStacks: [
          'Next.js',
          'TypeScript',
          'Redux',
          'Redux-Saga',
          'Redux Toolkit',
          'Emotion',
          '아임포트 결제',
        ],
      },
      {
        title: '‘원밀리언 댄스 스튜디오’ 홈페이지 유지·보수 및 신규 개발',
        description:
          '대표 홈페이지 전반 유지·보수 및 신규 개발(수업 스케줄링/예약, 강사 소개 등).',
        techStacks: ['React', 'TypeScript', 'Redux', 'Styled-Components'],
      },
    ],
  },
  {
    company: '(주) 웹웨어',
    role: 'Frontend Developer',
    period: '2021.08 - 2021.12',
    projects: [
      {
        title: '소셜 클라우드 서비스 홈페이지',
        description:
          '22년 4월 런칭 목표로 프로젝트 구성 및 개발. Next.js 도입, 구글 스프레드시트 기반 i18n 자동화 프로세스 구축.',
        techStacks: [
          'Next.js',
          'TypeScript',
          'Redux',
          'Redux-Saga',
          'Redux Toolkit',
          'Emotion',
        ],
      },
      {
        title: '웹웨어 크롬 익스텐션 유지·보수',
        description:
          '클라우드 협업 플랫폼 ‘웹웨어’의 크롬 익스텐션(캡처 기능 등) 유지·보수 및 개선.',
        techStacks: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        title: '‘입학닷컴’ 개발',
        description:
          '고3 입학 지원서 신청 사이트. 지원서 업로드/파일 첨부 프로세스 등 기능 전반 개발.',
        techStacks: ['HTML', 'CSS', 'JavaScript', 'JSP', 'Packer'],
      },
    ],
  },
  {
    company: '유모멘트',
    role: 'Frontend Developer',
    period: '2019.01 - 2021.08',
    projects: [
      {
        title: '‘웨딩의 여신’ 하이브리드 앱 화면 유지·보수',
        description:
          '예산표, 게시판, 견적서 열람 등 다양한 기능 추가/유지보수/개선.',
        techStacks: [
          'HTML',
          'CSS',
          'Less',
          'JavaScript',
          'jQuery',
          'JSP',
          'EJS',
          'Ajax',
          'React',
        ],
      },
      {
        title: '‘유모멘트’ 그룹웨어 앱 화면 개발',
        description:
          '하이브리드 기반 그룹웨어. 결재함 관련 서류 상신/반려 등 기능 개발.',
        techStacks: ['HTML', 'CSS', 'Less', 'JavaScript', 'jQuery', 'Ajax'],
      },
      {
        title: '‘MYPL’ 유저/관리자 하이브리드 앱',
        description:
          '플래너–예비신부 매칭 플랫폼. 업체 등록/선택, 플래너 소개, 매칭 관련 통신 등 화면과 기능 개발.',
        techStacks: ['Vue.js', 'Vuex'],
      },
    ],
  },
];
