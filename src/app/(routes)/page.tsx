import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { experiencesAPI } from '@features/experiences/model/api';
import { experiencesKeys } from '@features/experiences/model/queryKeys';
import ExperiencesSection from '@widgets/experiences/ExperiencesSection';
import IntroSection from '@widgets/intro/IntroSection';
import SkillsSection from '@widgets/skills/SkillsSection';
import styles from './page.module.scss';

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: experiencesKeys.list,
    queryFn: () => experiencesAPI.getExperienceListServer(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={styles.page}>
        <main className={styles.main}>
          <IntroSection />
          <ExperiencesSection />
          <SkillsSection />
        </main>
      </div>
    </HydrationBoundary>
  );
}
