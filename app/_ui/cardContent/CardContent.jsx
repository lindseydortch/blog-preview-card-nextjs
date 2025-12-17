import styles from "@/app/_ui/cardContent/cardContent.module.scss";
import Link from "next/link";

function CardContent() {
  return (
    <div className={styles.content}>
      <div className={styles.button}>
        <p>Learning</p>
      </div>
      <div className={styles.published}>
        <h3>Published 21 Dec 2023</h3>
      </div>
      <div className={styles.course}>
        <Link href="#">
          <h1>HTML & CSS foundations</h1>
        </Link>
      </div>
      <div className={styles.overview}>
        <p>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
    </div>
  );
}

export default CardContent;
