import { useContext } from "react";
import { CharactersContext } from "../../src/context/CharactersContext";

import Container from "../../components/Container";
import CharacterCard from "../../components/CharacterCard";
import Heading from "../../components/Heading";
import Slider from "../../components/Slider";

import s from "./Main.module.scss";

const Main = () => {
  const { characters, handleLikeClick } = useContext(CharactersContext);

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
