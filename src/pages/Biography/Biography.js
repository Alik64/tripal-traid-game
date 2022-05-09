import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

import Container from "../../components/Container";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import { ReactComponent as AnchorLink } from "../../assets/link_icon.svg";

import s from "./Biography.module.scss";

import { BIO } from "../../constants/bio";

const Biography = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate("/", {
      state: { from: id },
    });
  };

  if (!BIO[id]) {
    return <Navigate to="/characters" replace />;
  }
  return (
    <section className={s.root}>
      <Container>
        <div>
          <Button onClick={handleGoBackClick} color="black">
            Go back
          </Button>
        </div>
        {BIO[id].map((item, index) => {
          switch (item.type) {
            case "h1":
              return (
                <Heading
                  key={index}
                  level={1}
                  className={s.heading}
                  id={item.text.split(" ").join("_")}
                >
                  {item.text}
                  <Link to={`#${item.text.split(" ").join("_")}`}>
                    <AnchorLink className={s.anchorLink} />
                  </Link>
                </Heading>
              );
            case "h2":
              return (
                <div key={index}>
                  <Heading
                    level={2}
                    className={s.heading}
                    id={item.text.split(" ").join("_")}
                  >
                    {item.text}
                    <Link to={`#${item.text.split(" ").join("_")}`}>
                      <AnchorLink className={s.anchorLink} />
                    </Link>
                  </Heading>
                </div>
              );

            case "paragraph":
              return <Text key={index}>{item.text}</Text>;

            case "img":
              return (
                <div key={index} className={s.imgWrap}>
                  <img src={item.src} alt="Hero bio comics" />
                </div>
              );

            default:
              return <Text key={index}>{item.text}</Text>;
          }
        })}
      </Container>
    </section>
  );
};

Biography.propTypes = {};
export default Biography;
