"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const [picture, setPicture] = useState(null);

  const imageFieldChangeHandler = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPicture(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  const imagePick = useRef();
  const imagePickHandler = () => {
    imagePick.current.click();
  };
  return (
    <div className={styles.picker}>
      <label htmlFor="image">{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!picture && <p>No image picked yet</p>}
          {picture && <Image src={picture} fill alt="User selected image" />}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imagePick}
          onChange={imageFieldChangeHandler}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={imagePickHandler}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
