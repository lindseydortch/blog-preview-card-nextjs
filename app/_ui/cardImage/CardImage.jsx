import styles from "@/app/_ui/cardImage/cardImage.module.scss";
import Image from "next/image";

function CardImage() {
  return (
    <div className={styles.cardImageContainer}>
      <Image
        src="/assets/images/illustration-article.svg"
        alt="Image of Blog Preview"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}

export default CardImage;
