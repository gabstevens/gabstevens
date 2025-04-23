import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./rocket.module.css";

const initRocketAnimation = () => {
  const rocket = document.getElementById("rocket");
  const outer = document.getElementById("outer");
  const checkpoints = document.querySelectorAll(".checkpoint");

  const originPosition = getOriginPosition(rocket);

  function getOriginPosition(element) {
    const rect = element.getBoundingClientRect();

    return {
      x: rect.left + outer.scrollLeft,
      y: rect.top + outer.scrollTop
    };
  }

  function getPosition(element) {
    const rect = element.getBoundingClientRect();

    const elementPosition = {
      x: rect.left + outer.scrollLeft + rect.width / 2,
      y: rect.top + outer.scrollTop + rect.height / 2
    };

    return {
      x: elementPosition.x - originPosition.x,
      y: elementPosition.y - originPosition.y
    };
  }

  function createSPath(startPoint, endPoint) {
    return `M${startPoint.x},${startPoint.y} C${startPoint.x},${endPoint.y} ${endPoint.x},${startPoint.y} ${endPoint.x},${endPoint.y}`;
  }

  const PATH_TIME = 5;

  function animateRocket(path) {
    rocket.style.transition = "none";
    rocket.style.offsetRotate = "auto 90deg";
    rocket.style.offsetDistance = "0%";
    const rocketPosition = getPosition(rocket);
    rocket.style.offsetPath = `path('M ${rocketPosition.x} ${rocketPosition.y}')`;

    setTimeout(() => {
      rocket.style.transition = `offset-distance ${PATH_TIME}s ease-in-out`;
      rocket.style.offsetPath = `path('${path}')`;
      rocket.style.offsetDistance = "100%";

      setTimeout(() => {
        targetQueue.shift();
        if (targetQueue.length !== 0) {
          moveRocket();
        }
      }, PATH_TIME * 1000);
    }, 100);
  }

  const targetQueue = [];

  function moveRocket() {
    const rocketPosition = getPosition(rocket);
    console.table({ rocketPosition });
    const trajectory = createSPath(rocketPosition, targetQueue[0]);
    animateRocket(trajectory);
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          const checkpointPosition = getPosition(entry.target);
          const shouldMoveRocket = targetQueue.length === 0;
          targetQueue.push(checkpointPosition);
          if (shouldMoveRocket) {
            moveRocket();
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  // const points = [];

  checkpoints.forEach(checkpoint => {
    // points.push(getPosition(checkpoint));
    observer.observe(checkpoint);
  });
  // points.push(getPosition(rocket));

  // const path = createSmoothPath(points.reverse());
  // animateRocket(path)
};

const Rocket = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (isClient) {
      initRocketAnimation();
    }
  }, [isClient]);

  const rocketSize = 64;

  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.rocket} id="rocket">
      <div style={{ position: "relative" }}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <Image src="/rocket.png" alt="" width={rocketSize} height={rocketSize} />
      </div>
    </div>
  );
};

export default Rocket;
