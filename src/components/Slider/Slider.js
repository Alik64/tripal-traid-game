import { useState } from "react";

import Heading from "../Heading";
import Container from "../Container";

import s from "./Slider.module.scss";
import Button from "../Button";

const Slider = () => {
  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <section className={s.section}>
      <div className={s.slider}>
        <Container className={s.sliderContent}>
          <Heading level={1} className={s.header}>
            This is a header
          </Heading>
          <Heading level={2} className={s.header}>
            Random Title
          </Heading>
          <div className={s.call}>
            <Button>Wow</Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Slider;
