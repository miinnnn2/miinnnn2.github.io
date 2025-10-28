import { useQuery } from '@tanstack/react-query';
import { experiencesAPI } from './api';
import { experiencesKeys } from './queryKeys';

export const experiencesQuery = {
  useGetExperienceList: () => {
    return useQuery({
      queryKey: experiencesKeys.list,
      queryFn: () => experiencesAPI.getExperienceListClient(),
    });
  },
};
