import { Experience } from '@shared/config/experiences';
import Spacer from '@shared/ui/spacer/Spacer';
import styles from './ExperienceItem.module.scss';

const ExperienceItem = ({ experience }: { experience: Experience }) => {
  return (
    <article className={styles.container}>
      <div className={styles.company}>
        <h3>{experience.company}</h3>
        <Spacer height="1rem" />
        <p>{experience.role}</p>
        <p>{experience.period}</p>
      </div>
      <ul className={styles.list}>
        {experience.projects.map((project) => (
          <li key={project.title} className={styles.listItem}>
            <h3 className={styles.title}>{project.title}</h3>
            <h4 className={styles.subTitle}>Description.</h4>
            <p>{project.description}</p>
            <h4 className={styles.subTitle}>Tech Stacks.</h4>
            <p>{project.techStacks.join(', ')}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ExperienceItem;
