
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';

import Container from './components/Container';
import Heading from './components/Heading';
import CharacterCard from './components/CharacterCard';

import s from './App.module.scss';
import { useState } from 'react';
import Biography from './pages/Biography';


const CHARACTERS = [
  {
    "id": 1011334,
    "name": "Spider-Man",
    "description": "Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.",
    "thumbnail": {
      "path": "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fspider-man.png?alt=media&token=8ff4b083-81ed-449f-823c-c79110735d1b"
    },
    "humanName": "Peter Parker",
    "isLike": false,
  },
  {
    "id": 1021331,
    "name": "Doctor Strange",
    "description": "As Earth’s Sorcerer Supreme, Doctor Strange wields arcane spells and mystical artifacts to defend the planet against malevolent threats.",
    "thumbnail": {
      "path": "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fdoctor-strange.png?alt=media&token=299d8900-328f-4b0d-9116-aa9e0308a4b6"
    },
    "humanName": "Stephen Strange",
    "isLike": false,
  },
  {
    "id": 1167381,
    "name": "Captain America",
    "description": "Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
    "thumbnail": {
      "path": "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcapitan-america.png?alt=media&token=80c42b19-614d-46fa-9c83-8ab4ff218495"
    },
    "humanName": "Steve Rogers",
    "isLike": false,
  },
  {
    "id": 1127131,
    "name": "Iron Man",
    "description": "Genius. Billionaire. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
    "thumbnail": {
      "path": "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Firon-man.png?alt=media&token=e9a4443f-0dbc-4f49-aef9-7f8e7b261fab"
    },
    "humanName": "Tony Stark",
    "isLike": false,
  },
  {
    "id": 1113431,
    "name": "Hulk",
    "description": "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
    "thumbnail": {
      "path": "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fhulk.png?alt=media&token=5ae03f4c-e513-4b3c-bae2-c82e6d6add8a"
    },
    "humanName": "Bruce Banner",
    "isLike": false,
  },
  {
    "id": 1010536,
    "name": "Capitan Marvel",
    "description": "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
    "thumbnail": {
      "path": "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcapitan-marvel.png?alt=media&token=fb83366e-4902-4541-a732-2efbb55147e5"
    },
    "humanName": "Carol Danvers",
    "isLike": false,
  }
];


function App() {
  const [characters, setCharacters] = useState(CHARACTERS)
  const [bioId, setBioId] = useState(null)

  const handleLikeClick = (id) => {
    setCharacters(prevState => prevState.map(item => {
      if (id === item.id) {
        return {
          ...item,
          isLike: !item.isLike
        }
      }
      return item
    }))

  }

  const handleReadBio = (id) => {
    setBioId(id)
  }
  const handleGoBack = (bool) => {
    setBioId(bool)
  }


  return (
    <div className="App">
      <Header />
      {bioId
        ? <>
          <Biography id={bioId} onGoBack={handleGoBack} />
        </>

        : <>
          <Slider />
          <section className={s.cardSection}>
            <Container>
              <div className={s.cardTitle}>
                <Heading backLine >
                  Marvel cards
                </Heading>
                <Heading level={2} >
                  Collect your best five
                </Heading>
              </div>

              <div className={s.cardWrap}>
                {characters.map(card => (
                  <div key={card.id}>
                    <CharacterCard
                      id={card.id}
                      name={card.name}
                      src={card.thumbnail.path}
                      humanName={card.humanName}
                      description={card.description}
                      onLikeClick={(id) => handleLikeClick(id)}
                      onReadBio={(id) => handleReadBio(id)}
                      isLike={card.isLike}
                    />
                  </div>
                ))}

              </div>

            </Container>
          </section>
        </>
      }
      <Footer />
    </div >
  );
}

export default App;
