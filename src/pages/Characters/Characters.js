import { useState } from "react";

import Heading from "../../components/Heading";
import Container from "../../components/Container";
import CharacterCard from "../../components/CharacterCard";

import s from "./Characters.module.scss";

import { CHARACTERS } from "../../constants/characters";

const Characters = () => {
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
    <div className={s.root}>
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
    </div>
  );
};

export default Characters;
