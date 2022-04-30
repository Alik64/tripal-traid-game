import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Container from "../../components/Container";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Text from "../../components/Text";

import s from "./Biography.module.scss";

import { BIO } from "../../constants/bio";

const Biography = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleGoBackClick = () => {
    navigate(-1);
  };
  return (
    <section className={s.root}>
      <Container>
        <div>
          <Button onClick={handleGoBackClick} color="black">
            Go back
          </Button>
        </div>
        {BIO[id].map((item, index) => {
          let component;
          switch (item.type) {
            case "h1":
            case "h2":
              let level = item.type.slice(1);
              component = <Heading level={Number(level)}>{item.text}</Heading>;
              break;
            case "paragraph":
              component = <Text>{item.text}</Text>;
              break;
            case "img":
              component = (
                <div className={s.imgWrap}>
                  <img src={item.src} alt="Hero bio comics" />
                </div>
              );
              break;
            default:
              return <Text>{item.text}</Text>;
          }
          return <React.Fragment key={index}>{component}</React.Fragment>;
        })}
      </Container>
    </section>
  );
};

Biography.propTypes = {};
export default Biography;
