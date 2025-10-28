import { EXPERIENCES } from '@shared/config/experiences';
import { ExperiencesResponse } from './types';

export const experiencesAPI = {
  getExperienceListServer: async (): Promise<ExperiencesResponse> => {
    return { experiences: EXPERIENCES };
  },
  getExperienceListClient: async (): Promise<ExperiencesResponse> => {
    const res = await fetch(`/api/experiences`);
    if (!res.ok) throw new Error('Failed to load experiences');
    return res.json();
  },
};
