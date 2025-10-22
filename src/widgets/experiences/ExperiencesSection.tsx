import ExperienceItem from '@entities/experiences/ui/ExperienceItem';
import { EXPERIENCES } from '@shared/config/experiences';
import Spacer from '@shared/ui/spacer/Spacer';
import styles from './ExperiencesSection.module.scss';

const ExperiencesSection = () => {
  return (
    <section>
      <h2>Work Experiences.</h2>
      <Spacer height="7rem" />
      <div className={styles.list}>
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.company} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperiencesSection;
