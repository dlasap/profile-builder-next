import NavBar from "./components/NavBar/NavBar";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProfileContent />
    </main>
  );
}
