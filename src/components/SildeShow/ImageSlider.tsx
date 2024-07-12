'use client'
import { useState } from "react";
import styles from "./ImageSlider.module.css"

interface ImageSliderProps {
  imagePaths: string[]
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imagePaths }) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const nextImage = () => {
    if (imagePaths.length === 0) return;
    setImageIndex((imageIndex + 1) % imagePaths.length);
  }

  const prevImage = () => {
    if (imagePaths.length === 0) return;
    setImageIndex((imageIndex - 1 + imagePaths.length) % imagePaths.length)
  }

  return (
    <div className={styles.imageSlider}>
      <img src={imagePaths.length > 0 ? imagePaths[imageIndex] : ""} alt="" className={styles.sliderImage} />
      <div className={styles.curImageIndex}>{`${imageIndex + 1} / ${imagePaths.length}`}</div>
      <button onClick={prevImage} className={`${styles.sliderBtn} ${styles.prevBtn}`}>❮</button>
      <button onClick={nextImage} className={`${styles.sliderBtn} ${styles.nextBtn}`}>❯</button>
    </div>
  )
}

export default ImageSlider;