import { useContext } from "react";
import { CharactersContext } from "../../src/context/CharactersContext";

import Heading from "../../components/Heading";
import CharacterCard from "../../components/CharacterCard";

import s from "./Characters.module.scss";

const Characters = () => {
  const { characters, handleLikeClick } = useContext(CharactersContext);

  return (
    <div className={s.root}>
      <Heading level={1} backLine>
        Characters
      </Heading>
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
