import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 className={styles.card}>Performing Live Changes</h2>
          <p className={styles.description}>
            This is my portfolio website. Currently, it is under development.
            Stay tuned for updates.
          </p>
        </div>
      </div>
    </main>
  );
}
