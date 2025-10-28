import { EXPERIENCES } from '@shared/config/experiences';
import { ExperiencesResponse } from './types';

export const experiencesAPI = {
  getExperienceListServer: async (): Promise<ExperiencesResponse> => {
    return { experiences: EXPERIENCES };
  },
  getExperienceListClient: async (): Promise<ExperiencesResponse> => {
    return Promise.resolve({ experiences: EXPERIENCES });
    /** Github Page는 정적 호스팅이기 때문에 주석 처리 */
    // const res = await fetch(`/api/experiences`);
    // if (!res.ok) throw new Error('Failed to load experiences');
    // return res.json();
  },
};
