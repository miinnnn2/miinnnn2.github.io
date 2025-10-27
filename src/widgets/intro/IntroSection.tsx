import { PROFILE } from '@shared/config/profile';
import styles from './IntroSection.module.scss';

const IntroSection = () => {
  return (
    <section>
      <header className={styles.header}>
        <h1>
          안녕하세요.
          <br />
          {PROFILE.name}입니다.
        </h1>
        <aside className={styles.badges}>
          {PROFILE.badges.map((badge) => (
            <p key={badge}>{badge}</p>
          ))}
        </aside>
      </header>
      <div className={styles.content}>
        <p>{PROFILE.lead}</p>
      </div>
    </section>
  );
};

export default IntroSection;
