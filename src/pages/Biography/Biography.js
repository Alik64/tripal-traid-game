import React from "react";
import PropTypes from "prop-types";
import s from "./Biography.module.scss";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import { BIO } from "../../components/constants/bio";

const Biography = ({ id, onBackClick }) => {
  let bioDescription = BIO[id];

  const handleGoBackClick = () => {
    onBackClick && onBackClick(null);
  };

  return (
    <section className={s.root}>
      <Container>
        <div className={s.btnWrap}>
          <Button color="black" onClick={handleGoBackClick}>
            Go Back
          </Button>
        </div>

        {bioDescription.map((item, index) => {
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

Biography.propTypes = {
  id: PropTypes.number,
  onBackClick: PropTypes.func,
};
export default Biography;
