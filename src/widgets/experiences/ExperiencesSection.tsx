'use client';

import ExperienceItem from '@entities/experiences/ui/ExperienceItem';
import { experiencesQuery } from '@features/experiences/model/hooks';
import Spacer from '@shared/ui/spacer/Spacer';
import styles from './ExperiencesSection.module.scss';

const ExperiencesSection = () => {
  const { data, isLoading } = experiencesQuery.useGetExperienceList();

  return (
    <section>
      <h2>Work Experiences.</h2>
      <Spacer height="7rem" />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.list}>
          {data?.experiences?.map((experience) => (
            <ExperienceItem key={experience.company} experience={experience} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ExperiencesSection;
