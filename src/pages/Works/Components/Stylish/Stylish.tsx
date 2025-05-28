import React from "react";
import styles from "./stylish.module.scss";

const colors = [
  { hex: "#007AFF", label: "W" },
  { hex: "#222939", label: "W" },
  { hex: "#599D2E", label: "W" },
  { hex: "#64B531", label: "W" },
  { hex: "#858585", label: "W" },
  { hex: "#BCBCBC", label: "W" },
  { hex: "#0D1D33", label: "W" },
  { hex: "#121212", label: "W" },
  { hex: "#000000", label: "W" },
  { hex: "#1F2632", label: "W" },
  { hex: "#969696", label: "W" },
  { hex: "#FF4D4D", label: "W", isAlert: true },
];

const Stylish: React.FC = () => {
  return (
    <section className={styles.container}>
      <p className={styles.subtitle}>STYLE GUIDE</p>
      <h1 className={styles.title}>Make it stylish</h1>
      <p className={styles.description}>
        With their previous website lacking a coherent palette and personalization,
        we set to work on AWW’s new aesthetic with an intention of introducing brand
        awareness, color harmony and the right contrast. Font families were guided
        with idea of selecting the exact amount of pages that would support clean
        identity usage.
      </p>

      <div className={styles.colors}>
        {colors.map((color, index) => (
          <div key={index} className={styles.colorItem}>
            <div
              className={styles.colorPreview}
              style={{ color: color.hex }}
            >
              {color.label}
            </div>
            <div className={styles.colorCode}>{color.hex}</div>
          </div>
        ))}
      </div>

      <div className={styles.typography}>
        <div className={styles.robotoSlab}>ROBOTO</div>
        <div className={styles.robotoSlab}>SLAB</div>

        <div className={styles.robotoSet}>
          <div className={styles.uppercase}>A B C D E F G H I J K L M N<br />
          O P Q R S T U V W X Y Z</div>
          <div className={styles.lowercase}>a b c d e f g h i j k l m n o p<br />
          q r s t u v w x y z</div>
        </div>
      </div>

      <p className={styles.fontNote}>
        Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric.
        While some grotesks distort their letterforms to force a rigid rhythm, Roboto doesn’t
        compromise, allowing letters to be settled into their natural width.
      </p>
    </section>
  );
};

export default Stylish;
