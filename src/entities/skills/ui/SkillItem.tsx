import { Skill } from '@shared/config/skills';
import Spacer from '@shared/ui/spacer/Spacer';
import styles from './SkillItem.module.scss';

const SkillItem = ({ skill }: { skill: Skill }) => {
  return (
    <article>
      <h3>{skill.title}</h3>
      <Spacer height="1rem" />
      <ul>
        {skill.summaries.map((summary) => (
          <li key={summary} className={styles.item}>
            {summary}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default SkillItem;
