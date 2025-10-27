import ExperiencesSection from '@widgets/experiences/ExperiencesSection';
import IntroSection from '@widgets/intro/IntroSection';
import SkillsSection from '@widgets/skills/SkillsSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <IntroSection />
        <ExperiencesSection />
        <SkillsSection />
      </main>
    </div>
  );
}
