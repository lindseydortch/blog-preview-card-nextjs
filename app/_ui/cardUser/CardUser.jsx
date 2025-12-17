import styles from "@/app/_ui/cardUser/cardUser.module.scss";
import Image from "next/image";

function CardUser() {
  return (
    <div className={styles.user}>
      <div className={styles.cardUserImgContainer}>
        <Image
          src="/assets/images/image-avatar.webp"
          alt="Image of Greg Hooper"
          priority
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <h4 className={styles.userName}>Greg Hooper</h4>
    </div>
  );
}

export default CardUser;
