import { useState } from "react";

import Container from "../../components/Container";
import CharacterCard from "../../components/CharacterCard";
import Heading from "../../components/Heading";
import Slider from "../../components/Slider";

import s from "./Main.module.scss";
import { CHARACTERS } from "../../constants/characters";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  console.log(location.state);
  const [characters, setCharacters] = useState(CHARACTERS);

  const handleLikeClick = (id) => {
    setCharacters((prevState) =>
      prevState.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            isLike: !item.isLike,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <Slider />
      <section className={s.cardSection}>
        <Container>
          <div className={s.cardTitle}>
            <Heading backLine>Marvel cards</Heading>
            <Heading level={2}>Collect your best five</Heading>
          </div>
          <div className={s.cardWrap}>
            {characters.map((card) => (
              <div key={card.id}>
                <CharacterCard
                  id={card.id}
                  name={card.name}
                  src={card.thumbnail.path}
                  humanName={card.humanName}
                  description={card.description}
                  onLikeClick={handleLikeClick}
                  isLike={card.isLike}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Main;
