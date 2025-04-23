import React from "react";
import Image from "next/image";
import styles from "./planet.module.css";

type PlanetProps = {
  src: string;
};

const Planet: React.FC<PlanetProps> = ({ src }) => {
  const planetSize = 128;
  return (
    <div>
      <div
        style={{
          height: planetSize,
          width: planetSize
        }}
        className={`checkpoint ${styles.planetContainer}`}
      >
        <Image
          src={src}
          alt=""
          width={planetSize}
          height={planetSize}
          style={{ animationDelay: `${Math.random() * -10}s` }}
          className={styles.planet}
        />
      </div>
    </div>
  );
};

export default Planet;
