
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';

import Container from './components/Container';
import Heading from './components/Heading';
import CharacterCard from './components/CharacterCard';

import s from './App.module.scss';

const CHARACTER = {
  id: 1011334,
  name: 'Spider-Man',
  description: 'Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.',
  thumbnail: {
    path: 'https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fspider-man.png?alt=media&token=8ff4b083-81ed-449f-823c-c79110735d1b'
  },
  humanName: 'Peter Parker',
  isLike: false,
};


function App() {
  return (
    <div className="App">
      <Header />
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
            <div>
              <CharacterCard
                id={CHARACTER.id}
                name={CHARACTER.name}
                src={CHARACTER.thumbnail.path}
                humanName={CHARACTER.humanName}
                description={CHARACTER.description}
              />
            </div>
            <div>
              <CharacterCard
                id={CHARACTER.id}
                name={CHARACTER.name}
                src={CHARACTER.thumbnail.path}
                humanName={CHARACTER.humanName}
                description={CHARACTER.description}
              />
            </div>
            <div>
              <CharacterCard
                id={CHARACTER.id}
                name={CHARACTER.name}
                src={CHARACTER.thumbnail.path}
                humanName={CHARACTER.humanName}
                description={CHARACTER.description}
              />
            </div>



          </div>

        </Container>
      </section>
      <Footer />
    </div >
  );
}

export default App;
