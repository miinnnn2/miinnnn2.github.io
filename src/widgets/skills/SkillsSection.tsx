import SkillItem from '@entities/skills/ui/SkillItem';
import { SKILLS } from '@shared/config/skills';
import Spacer from '@shared/ui/spacer/Spacer';
import styles from './SkillsSection.module.scss';

const SkillsSection = () => {
  return (
    <section>
      <h2>Skills.</h2>
      <Spacer height="4rem" />
      <div className={styles.list}>
        {SKILLS.map((skill) => (
          <SkillItem key={skill.title} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
