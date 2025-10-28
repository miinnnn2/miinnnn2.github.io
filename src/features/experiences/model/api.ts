import { ExperiencesResponse } from './types';

export const experiencesAPI = {
  getExperienceList: async (): Promise<ExperiencesResponse> => {
    const res = await fetch('/api/experiences');
    if (!res.ok) throw new Error('Failed to load experiences');
    return res.json();
  },
};
