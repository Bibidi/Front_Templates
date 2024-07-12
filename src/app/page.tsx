import ImageSlider from "@/components/SildeShow/ImageSlider";
import styles from "./page.module.css";

export default function Home() {
  const imagePaths: string[] = [
    './images/college.jpeg',
    './images/subway.jpeg',
    './images/banner.jpeg',
  ];

  return (
    <main className={styles.main}>
      <ImageSlider imagePaths={imagePaths} />
      <div className={styles.description}>
        양은진 바보
      </div>
    </main>
  );
}
