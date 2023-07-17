"use client";
import Sketch from "../../assets/images/sketch.png";
import Room from "../../assets/images/room.png";
import Stars from "../../assets/images/stars.png";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./LayoutCreator.module.scss";

export default function LayoutCreator() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

 

  console.log(watch("example"));

  return (
    <section className={styles.layoutcreatorContainer}>
      <div className={styles.configuration}>
        {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label htmlFor="width">Width (in metre)</label>
          <input
            id="width"
            type="number"
            {...register("example")}
            placeholder="XXXXX"
          />

          {/* include validation with required or other standard HTML validation rules */}
          <label htmlFor="height">Height (in metre)</label>
          <input
            id="height"
            type="number"
            {...register("exampleRequired", { required: true })}
            placeholder="XXXXX"
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <label for="object-select">Choose an object :</label>

          <select name="objects" id="object-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">2 Seater Sofa</option>
            <option value="cat">Coffee Table</option>
            <option value="hamster">LED stand</option>
            <option value="parrot">Arm Chair</option>
            <option value="spider">3 SeaterSofa</option>
          </select>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" value="CREATE" />
        </form>
      </div>
      <div className={styles.preview}>
        <div className={styles.bgStars}>
          <Image src={Stars} alt="stars_bg" />
        </div>
        <Image src={Room} alt="sketch_icon" id="bgRoom"/>
      </div>
    </section>
  );
}
