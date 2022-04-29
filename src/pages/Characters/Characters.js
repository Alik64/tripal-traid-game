import { useState } from "react";

import Heading from "../../components/Heading";

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
      <Heading backLine>Characters</Heading>
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
    </div>
  );
};

export default Characters;
