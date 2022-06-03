import React, { useEffect, useState } from "react";
import { CHARACTERS } from "../../constants/characters";

export const CharactersContext = React.createContext();

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState(CHARACTERS);

  // Control if we have already Characters in a LocalStorage.
  useEffect(() => {
    const storagedCharacters = window.localStorage.getItem("characters")
      ? JSON.parse(window.localStorage.getItem("characters"))
      : characters;
    setCharacters(storagedCharacters);
  }, []);

  // Put modified characters in a LocalStorage
  useEffect(() => {
    window.localStorage.setItem("characters", JSON.stringify(characters));
  }, [characters]);

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
    <CharactersContext.Provider
      value={{
        characters,
        handleLikeClick,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
